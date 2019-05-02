import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';
import { ComponentsModule } from '../components/module';

import { HomePage } from './home/home';

const PAGES: any[] = [
  HomePage,
];

@NgModule({
  imports: [
    LibModule.forRoot(),
    ComponentsModule,
  ],
  declarations: [
    ...PAGES,
  ],
  entryComponents: [
    ...PAGES,
  ],
  providers: [
  ],
})
export class ViewsModule {}
