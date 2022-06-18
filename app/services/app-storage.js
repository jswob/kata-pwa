import Service from '@ember/service';

export default class AppStorageService extends Service {
  getItem(name) {
    return this[name];
  }

  setItem(name, value) {
    this[name] = value;
  }
}
