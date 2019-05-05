import { Component, Input, OnInit } from '@angular/core';
import { AirConditionerDevice } from '@app/models';

@Component({
  selector: 'app-device-air-conditioner',
  templateUrl: './air-conditioner.html'
})
export class AirConditionerComponent implements OnInit {
  @Input() model: AirConditionerDevice;
  state: boolean = false;

  ngOnInit(): void {
    this.state = (this.model.state === 'on') ? true : false;
  }

  onStateChanges(): void {
    this.model.state = (this.state) ? 'on' : 'off';
  }
}
