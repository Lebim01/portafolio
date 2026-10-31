import { defineMiddleware } from 'astro:middleware';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  getLocalizedPath,
  isValidLocale,
  parseAcceptLanguage,
  type Locale,
} from './i18n/utils';

const BOT_USER_AGENT_REGEX =
  /bot|crawler|spider|crawling|googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|lighthouse/i;

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, cookies, redirect } = context;
  const { pathname, searchParams } = url;

  // Skip internal Astro assets and static files
  if (
    pathname.startsWith('/_astro') ||
    pathname.startsWith('/_image') ||
    pathname.includes('.')
  ) {
    return next();
  }

  const cookieOptions = {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax' as const,
    httpOnly: false,
  };

  // 1. Explicit language switch via ?lang=es|en sets cookie and redirects to clean canonical URL
  const queryLang = searchParams.get('lang');
  if (isValidLocale(queryLang)) {
    cookies.set(LOCALE_COOKIE_NAME, queryLang, cookieOptions);
    return redirect(getLocalizedPath(queryLang), 302);
  }

  // 2. Canonicalize /es -> /
  if (pathname === '/es' || pathname === '/es/') {
    cookies.set(LOCALE_COOKIE_NAME, 'es', cookieOptions);
    return redirect('/', 301);
  }

  // 3. Determine active locale for /en vs /
  let resolvedLocale: Locale = DEFAULT_LOCALE;

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    resolvedLocale = 'en';
    if (cookies.get(LOCALE_COOKIE_NAME)?.value !== 'en') {
      cookies.set(LOCALE_COOKIE_NAME, 'en', cookieOptions);
    }
  } else if (pathname === '/') {
    const savedCookie = cookies.get(LOCALE_COOKIE_NAME)?.value;

    if (isValidLocale(savedCookie)) {
      if (savedCookie === 'en') {
        return redirect('/en', 302);
      }
      resolvedLocale = 'es';
    } else {
      // First-time visit: negotiate via Accept-Language for human browsers (never redirect SEO bots/Lighthouse)
      const userAgent = request.headers.get('user-agent') ?? '';
      const isBot = BOT_USER_AGENT_REGEX.test(userAgent);

      if (!isBot) {
        const headerLocale = parseAcceptLanguage(
          request.headers.get('accept-language')
        );
        if (headerLocale === 'en') {
          cookies.set(LOCALE_COOKIE_NAME, 'en', cookieOptions);
          return redirect('/en', 302);
        }
      }
      resolvedLocale = 'es';
    }
  }

  context.locals.locale = resolvedLocale;

  const response = await next();
  const headers = new Headers(response.headers);
  headers.set('Content-Language', resolvedLocale);
  headers.set('Vary', 'Accept-Language, Cookie');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
