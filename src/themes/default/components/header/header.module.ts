import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibModule } from '@lib/angular/module';

const COMPONENTS: any[] = [
  HeaderComponent,
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
export class HeaderModule {}
