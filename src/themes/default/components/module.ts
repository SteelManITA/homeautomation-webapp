import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { DeviceModule } from './device/device.module';
import { RoomModule } from './room/room.module';

const COMPONENT_MODULES: any[] = [
  HeaderModule,
  FooterModule,
  DeviceModule,
  RoomModule,
];

@NgModule({
  imports: [
    LibModule.forRoot(),
    ...COMPONENT_MODULES,
  ],
  exports: [
    ...COMPONENT_MODULES,
  ],
  providers: [
  ]
})
export class ComponentsModule {}
