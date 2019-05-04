import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/module';

import { HomePage } from './home/home';
import { RoomPage } from './room/room';

const PAGES: any[] = [
  HomePage,
  RoomPage,
];

@NgModule({
  imports: [
    RouterModule,
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
