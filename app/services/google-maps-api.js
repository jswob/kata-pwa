import GoogleMapsAPIService from 'ember-google-maps/services/google-maps-api';

export default class GoogleMapsApiService extends GoogleMapsAPIService {
  async getPointsOfInterest(lat, lng, callback) {
    const google = await this.google;
    var currentPosition = new google.maps.LatLng(lat, lng);
    const map = new google.maps.Map(document.querySelector('#hidden'), {
      center: currentPosition,
      zoom: 10,
    });
    var request = {
      keyword: 'restauracja',
      location: currentPosition,
      radius: 500,
    };
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
}
