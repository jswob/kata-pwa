import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QrScannerComponent extends Component {
  @tracked cameraStream = null;

  @tracked activeCamera = null;

  @tracked cameraOptions = [];

  @tracked activeLink = null;

  @action
  async setup() {
    await this.checkCameras();

    this.changeCamera(this.cameraOptions[0]);
  }

  async checkCameras() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    this.cameraOptions = devices.filter(({ kind }) => kind === 'videoinput');
  }

  async setupCameraStream() {
    this.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: this.activeCamera.deviceId },
    });
  }

  @action
  changeCamera(cameraDevice) {
    this.activeCamera = cameraDevice;

    this.setupCameraStream();
  }

  @action
  generateLink(url) {
    if (!url || !url.length || this.activeLink) return;

    this.activeLink = url;
  }

  @action
  closeModal() {
    this.activeLink = null;
  }
}
