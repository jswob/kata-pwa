import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NoteFormComponent extends Component {
  @service store;

  @tracked title = '';

  @tracked description = '';

  get canNotBeSaved() {
    return !this.title.length || !this.description.length;
  }

  clearForm() {
    this.title = '';
    this.description = '';
  }

  @action
  setValue(propName, { target }) {
    this[propName] = target.value;
  }

  @action
  async saveNote(evt) {
    evt.preventDefault();

    if (this.canNotBeSaved) return;

    const { title, description } = this;

    await this.store
      .createRecord('note', {
        title,
        description,
      })
      .save();

    this.clearForm();
  }
}
