'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'kata-pwa',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {},

    'ember-google-maps': {
      key: process.env.GOOGLE_API_KEY,
      language: 'en',
      region: 'GB',
      protocol: 'https',
      libraries: ['geometry', 'places'],
    },
    'ember-local-storage': {
      includeEmberDataSupport: true,
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-google-maps'] = {
      key: process.env.GOOGLE_API_KEY,
      language: 'en',
      region: 'GB',
      protocol: 'https',
      libraries: ['geometry', 'places'],
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV['ember-google-maps'] = {
      key: process.env.GOOGLE_API_KEY,
      protocol: 'https',
    };
  }

  return ENV;
};
