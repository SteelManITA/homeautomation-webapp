import { Component, Input, OnInit } from '@angular/core';
import { LightDevice } from '@app/models';

@Component({
  selector: 'app-device-light',
  templateUrl: './light.html'
})
export class LightComponent implements OnInit {
  @Input() model: LightDevice;
  state: boolean = false;

  ngOnInit(): void {
    this.state = (this.model.state === 'on') ? true : false;
  }

  onStateChanges(): void {
    this.model.state = (this.state) ? 'on' : 'off';
  }
}
