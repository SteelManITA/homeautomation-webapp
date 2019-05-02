import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';

const COMPONENTS: any[] = [
];

@NgModule({
  imports: [
    LibModule.forRoot(),
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  providers: [
  ]
})
export class ComponentsModule {}
