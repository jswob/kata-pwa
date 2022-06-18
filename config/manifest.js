'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'kata-pwa',
    short_name: 'kata-pwa',
    description: '',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    orientation: 'portrait',
    icons: [
      {
        src: 'assets/icons/camera-32.png',
        sizes: '32x32',
        targets: ['favicon'],
      },
      {
        src: 'assets/icons/diamond.svg',
        purpose: 'maskable',
      },
      ...[192, 280, 512].map((size) => ({
        src: `/assets/icons/camera-${size}.png`,
        sizes: `${size}x${size}`,
      })),
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
