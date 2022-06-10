import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class LevelComponent extends Component {
  get inputId() {
    return guidFor(this);
  }
}
