import EmberRouter from '@ember/routing/router';
import config from 'kata-pwa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('feat', function () {
    this.route('geolocation');
    this.route('notes');
    this.route('camera');
    this.route('orientation');
  });
});
