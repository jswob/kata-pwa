/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (/* env */) {
  return {
    clientAllowedKeys: ['GOOGLE_API_KEY'],
    fastbootAllowedKeys: ['GOOGLE_API_KEY'],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env'),
  };
};
