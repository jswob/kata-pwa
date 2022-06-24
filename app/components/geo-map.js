import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GeoMapComponent extends Component {
  @service geolocation;

  @tracked currentLocation = null;

  @action
  async fetchLocation() {
    let { coords } = await this.geolocation.getLocation();

    const latitude = +coords.latitude;
    const longitude = +coords.longitude;

    this.currentLocation = { latitude, longitude };
  }
}
