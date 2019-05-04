import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';

const COMPONENT_MODULES: any[] = [
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
