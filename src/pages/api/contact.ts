import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactRequestBody {
  name?: string;
  email?: string;
  projectType?: string;
  scope?: string;
  message?: string;
  locale?: 'es' | 'en';
  website?: string; // Honeypot field (must be empty)
  elapsedMs?: number; // Anti-bot timing check
}

// Lightweight in-memory rate limiter per IP (serverless warm instance protection)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  entry.count += 1;
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    clientAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'RATE_LIMITED',
        message: 'Too many requests. Please try again in a few minutes.',
      }),
      {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  let body: ContactRequestBody;
  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'INVALID_JSON',
        message: 'Invalid request payload.',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  // 1. Anti-spam Honeypot & timing check
  if (body.website && body.website.trim().length > 0) {
    // Silently accept to fool automated spam bots
    return new Response(
      JSON.stringify({
        ok: true,
        id: `ref_${Date.now().toString(36)}`,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  if (typeof body.elapsedMs === 'number' && body.elapsedMs < 1200) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'SPAM_DETECTED',
        message: 'Submission rejected by anti-spam protection.',
      }),
      {
        status: 422,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  // 2. Field validation & sanitization
  const name = (body.name ?? '').trim().slice(0, 120);
  const email = (body.email ?? '').trim().toLowerCase().slice(0, 160);
  const projectType = (body.projectType ?? '').trim().slice(0, 140);
  const scope = (body.scope ?? '').trim().slice(0, 140);
  const message = (body.message ?? '').trim().slice(0, 4000);
  const locale = body.locale === 'en' ? 'en' : 'es';

  if (
    name.length < 2 ||
    !EMAIL_REGEX.test(email) ||
    projectType.length === 0 ||
    message.length < 15
  ) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'VALIDATION_ERROR',
        message:
          locale === 'en'
            ? 'Please complete all required fields with valid information.'
            : 'Por favor completa todos los campos obligatorios correctamente.',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const referenceId = `VA-${Date.now().toString(36).toUpperCase()}`;
  const submittedAt = new Date().toISOString();

  const runtimeEnv =
    (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env ?? {};

  const resendApiKey =
    import.meta.env.RESEND_API_KEY || runtimeEnv.RESEND_API_KEY || '';
  const toEmail =
    import.meta.env.CONTACT_TO_EMAIL ||
    runtimeEnv.CONTACT_TO_EMAIL ||
    'victoralvarezsaucedo@gmail.com';
  const fromEmail =
    import.meta.env.CONTACT_FROM_EMAIL ||
    runtimeEnv.CONTACT_FROM_EMAIL ||
    'Victor Alvarez Portfolio <onboarding@resend.dev>';
  const webhookUrl =
    import.meta.env.CONTACT_WEBHOOK_URL || runtimeEnv.CONTACT_WEBHOOK_URL || '';

  const subject = `[Portafolio ${referenceId}] ${projectType} — ${name}`;
  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0F17; color: #F8FAFC; padding: 28px; border-radius: 14px; border: 1px solid #1E293B;">
      <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #F59E0B; margin: 0 0 8px;">
        VICTOR ALVAREZ · NEW PORTFOLIO INQUIRY (${escapeHtml(referenceId)})
      </p>
      <h2 style="margin: 0 0 20px; font-size: 20px; color: #FFFFFF;">
        ${escapeHtml(projectType)}
      </h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; color: #94A3B8; width: 130px;">Nombre / Name:</td>
          <td style="padding: 8px 0; color: #F8FAFC; font-weight: 600;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94A3B8;">Email:</td>
          <td style="padding: 8px 0; color: #F59E0B;"><a href="mailto:${escapeHtml(email)}" style="color: #F59E0B;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94A3B8;">Especialidad:</td>
          <td style="padding: 8px 0; color: #F8FAFC;">${escapeHtml(projectType)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94A3B8;">Alcance / Scope:</td>
          <td style="padding: 8px 0; color: #F8FAFC;">${escapeHtml(scope || 'N/A')}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94A3B8;">Idioma / Locale:</td>
          <td style="padding: 8px 0; color: #F8FAFC;">${escapeHtml(locale.toUpperCase())}</td>
        </tr>
      </table>
      <div style="background: #111827; border: 1px solid #1E293B; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #E2E8F0; white-space: pre-wrap;">${escapeHtml(message)}</div>
      <p style="margin: 18px 0 0; font-size: 11px; color: #64748B; font-family: monospace;">
        Ref: ${escapeHtml(referenceId)} · ${escapeHtml(submittedAt)}
      </p>
    </div>
  `;

  // 3. Deliver via Resend API if RESEND_API_KEY is configured
  if (resendApiKey) {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html: htmlBody,
        text: `Ref: ${referenceId}\nNombre: ${name}\nEmail: ${email}\nEspecialidad: ${projectType}\nAlcance: ${scope}\n\nMensaje:\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text().catch(() => '');
      console.error('[contact-api] Resend error:', resendRes.status, errText);
      return new Response(
        JSON.stringify({
          ok: false,
          code: 'DELIVERY_ERROR',
          message:
            locale === 'en'
              ? 'Could not deliver the message at this moment. Please try again.'
              : 'No se pudo entregar el mensaje en este momento. Intenta nuevamente.',
        }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        id: referenceId,
        deliveredVia: 'resend',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  // 4. Optional custom webhook delivery (Slack / Discord / n8n / Make / NestJS)
  if (webhookUrl) {
    const hookRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: referenceId,
        name,
        email,
        projectType,
        scope,
        message,
        locale,
        submittedAt,
      }),
    });

    if (!hookRes.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          code: 'WEBHOOK_ERROR',
          message: 'Webhook delivery failed.',
        }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        id: referenceId,
        deliveredVia: 'webhook',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  // 5. Structured server log fallback when running without external API keys yet
  console.info('[contact-api] Inquiry received:', {
    id: referenceId,
    name,
    email,
    projectType,
    scope,
    message,
    locale,
    submittedAt,
  });

  return new Response(
    JSON.stringify({
      ok: true,
      id: referenceId,
      deliveredVia: 'server-endpoint',
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
};

