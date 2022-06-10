import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LevelMeterComponent extends Component {
  @tracked beta;
  @tracked gamma;

  @action
  setupListener() {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  }

  handleOrientation({ beta, gamma }) {
    this.beta = beta;
    this.gamma = gamma;
  }

  @action
  removeListener() {
    window.removeEventListener('deviceorientation', this.handleOrientation);
  }
}
