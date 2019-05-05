import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibModule } from '@lib/angular/module';

import { RoomComponent } from './room.component';

const COMPONENTS: any[] = [
  RoomComponent,
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
export class RoomModule { }
