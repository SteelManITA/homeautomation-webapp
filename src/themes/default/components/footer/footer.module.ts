import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibModule } from '@lib/angular/module';
import { FooterComponent } from './footer.component';

const COMPONENTS: any[] = [
  FooterComponent,
];

@NgModule({
  imports: [
    LibModule.forRoot(),
    RouterModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class FooterModule {}
