const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://0wtlq2oe.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;