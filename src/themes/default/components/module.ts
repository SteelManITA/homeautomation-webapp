import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

const COMPONENT_MODULES: any[] = [
  HeaderModule,
  FooterModule,
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
