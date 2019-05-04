import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibModule } from '@lib/angular/module';

import { DeviceComponent } from './device.component';
import { AirConditionerComponent } from './air-conditioner/air-conditioner';
import { LightComponent } from './light/light';

const COMPONENTS: any[] = [
  DeviceComponent,
  AirConditionerComponent,
  LightComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    LibModule.forRoot(),
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class DeviceModule { }
