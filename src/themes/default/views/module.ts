import { NgModule } from '@angular/core';
import { LibModule } from '@lib/angular/module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/module';

import { HomePage } from './home/home';
import { SettingsPage } from './settings/settings';
import { RoomPage } from './room/room';
import { NotFoundPage } from './not-found/not-found';

const PAGES: any[] = [
  HomePage,
  SettingsPage,
  RoomPage,
  NotFoundPage,
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
