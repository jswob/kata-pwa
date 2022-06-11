import Component from '@glimmer/component';

export default class LevelComponent extends Component {
  get isCentered() {
    let { min, max, value, tolerance } = this.args;
    tolerance = tolerance ?? 1;

    if (value === undefined) return true;

    let center;

    if (max > 0 && min < 0) center = max + min;
    else center = min - max;

    return value > center - tolerance && value < center + tolerance;
  }
}
