import GoogleMapsAPIService from 'ember-google-maps/services/google-maps-api';
import ENV from 'kata-pwa/config/environment';

export default class GoogleMapsApiService extends GoogleMapsAPIService {
  buildGoogleMapsUrl() {
    return `//maps.googleapis.com/maps/api/js?key=${ENV['ember-google-maps'].key}`;
  }
}
