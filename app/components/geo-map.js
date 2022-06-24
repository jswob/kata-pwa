import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GeoMapComponent extends Component {
  @service geolocation;

  @service('google-maps-api') maps;

  @tracked currentLocation = null;

  @tracked pointsOfInterest = [];

  @tracked mappedPointsOfInterest = [];

  @action
  mapPointsOfInterest() {
    this.mappedPointsOfInterest = this.pointsOfInterest.map((point) => {
      return {
        name: point.name,
        lat: point.geometry.location.lat(),
        lng: point.geometry.location.lng(),
      };
    });
  }

  @action
  async fetchLocation() {
    let { coords } = await this.geolocation.getLocation();

    const latitude = +coords.latitude;
    const longitude = +coords.longitude;

    this.currentLocation = { latitude, longitude };

    await this.maps.getPointsOfInterest(
      this.currentLocation.latitude,
      this.currentLocation.longitude,
      (results) => {
        if (typeof results === 'object') {
          this.pointsOfInterest = results;
        }
      }
    );
  }
}
