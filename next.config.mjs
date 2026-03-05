import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // Type errors are checked locally via `npx tsc --noEmit` before deploying
    ignoreBuildErrors: false,
  },
  // Increase timeout for static page generation workers (default is 60s)
  staticPageGenerationTimeout: 180,
};

export default withNextIntl(config);
