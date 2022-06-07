import Route from '@ember/routing/route';

export default class FeatNotesRoute extends Route {
  model() {
    return this.store.findAll('note');
  }
}
