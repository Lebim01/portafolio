export const SUPPORTED_LOCALES = ['es', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';
export const LOCALE_COOKIE_NAME = 'va_locale';

export function isValidLocale(value: string | undefined | null): value is Locale {
  return value === 'es' || value === 'en';
}

/**
 * Parses the HTTP Accept-Language header in SSR to detect preferred language.
 */
export function parseAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const ranges = header
    .split(',')
    .map((part) => {
      const [langToken, qToken] = part.trim().split(';');
      const code = langToken?.trim().toLowerCase().slice(0, 2) ?? '';
      const q = qToken ? parseFloat(qToken.replace('q=', '')) : 1.0;
      return { code, q: Number.isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of ranges) {
    if (isValidLocale(item.code)) {
      return item.code;
    }
  }
  return null;
}

/**
 * Returns the canonical path for a given locale (`/` for `es`, `/en` for `en`).
 */
export function getLocalizedPath(locale: Locale, hash = ''): string {
  const basePath = locale === 'en' ? '/en' : '/';
  if (!hash) return basePath;
  const cleanHash = hash.startsWith('#') ? hash : `#${hash}`;
  return `${basePath}${cleanHash}`;
}

/**
 * Builds hreflang alternate URLs for SEO in SSR.
 */
export function getAlternateLinks(siteOrigin: string) {
  const base = siteOrigin.replace(/\/$/, '');
  return {
    es: `${base}/`,
    en: `${base}/en`,
    xDefault: `${base}/`,
  };
}

