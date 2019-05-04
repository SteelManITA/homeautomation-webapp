import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { Device } from '@app/models';
import { Utils } from '@lib/utils/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.html'
})
export class DeviceComponent implements OnInit, DoCheck {
  private oldModel: Device;
  private sentModel: Device;
  private lastModify: Date;
  private timer: any;

  @Input() model: Device;
  @Input() delayMS: number = 300;
  @Output() sent: EventEmitter<Device> = new EventEmitter<Device>();

  private keepTrackChanges(): void {
    this.oldModel = Object.assign({}, this.model);
    this.lastModify = new Date();
  }

  send(): void {
    if (!Utils.equalObjects(this.sentModel, this.model)) {
      this.sent.emit(this.model);
      this.sentModel = Object.assign({}, this.model);
    }
  }

  ngOnInit(): void {
    this.keepTrackChanges();
    this.sentModel = Object.assign({}, this.model);
  }

  ngDoCheck(): void {
    if (!Utils.equalObjects(this.model, this.oldModel)) {
      if (Utils.diffMilliseconds(new Date(), this.lastModify) < this.delayMS) {
        clearTimeout(this.timer);
      }
      this.keepTrackChanges();
      this.timer = setTimeout(this.send.bind(this), this.delayMS);
    }
  }
}
