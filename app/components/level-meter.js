import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class LevelMeterComponent extends Component {
  @service router;

  @tracked beta;
  @tracked gamma;
  @tracked permission = 'denied';

  get isApple() {
    return (
      [
        'IPad Simulator',
        'IPhone Simulator',
        'IPod Simulator',
        'IPad',
        'IPhone',
        'IPod',
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  }

  get isPermissionGranted() {
    return this.permission === 'granted';
  }

  @action
  async setup() {
    if (!this.isApple /* || (await this.getSavedPermissionStatus()) */) {
      this.permission = 'granted';
      this.setupListener();
    }
  }

  // async getSavedPermissionStatus() {
  //   return await window.localStorage.getItem('hasSensorPermissionBeenGranted');
  // }

  // async setSavedPermissionStatus(value) {
  //   await window.localStorage.setItem('hasSensorPermissionBeenGranted', value);
  // }

  setupListener() {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  }

  @action
  async askForPermission() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      this.permission = await DeviceOrientationEvent.requestPermission();
    }

    if (!this.isPermissionGranted) {
      this.router.transitionTo('index');
    } else {
      // await this.setSavedPermissionStatus(true);
      this.setupListener();
    }
  }

  @action
  async handleOrientation(event) {
    const { beta, gamma } = event;
    this.beta = beta;
    this.gamma = gamma;
  }

  @action
  removeListener() {
    window.removeEventListener('deviceorientation', this.handleOrientation);
  }
}
