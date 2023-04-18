const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,

  // i18n support is not compatible with next export, so do not choose
  // 'out' file as a file to be hosted
  i18n,

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            // in fact, Vercel will take care of this by overwrite and
            // set it to the most effective value
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },

  // output: 'export',
});
