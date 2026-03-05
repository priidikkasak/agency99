import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'et'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'en';
  if (!locales.includes(locale as Locale)) notFound();
  // locale is now valid ('en' | 'et')

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
