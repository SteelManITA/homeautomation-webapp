import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { DeviceModule } from './device/device.module';

const COMPONENT_MODULES: any[] = [
  HeaderModule,
  FooterModule,
  DeviceModule,
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
