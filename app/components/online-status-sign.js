import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class OnlineStatusSignComponent extends Component {
  @tracked
  isOnline = true;

  updateIsOnline() {
    this.isOnline = navigator.onLine;
  }

  @action
  setup() {
    this.updateIsOnline();
    ['load', 'online', 'offline'].forEach((eventName) =>
      window.addEventListener(eventName, () => this.updateIsOnline())
    );
  }
}
