import { Routes } from '@angular/router';
import { HomePage } from '@theme/views/home/home';
import { SettingsPage } from '@theme/views/settings/settings';
import { RoomPage } from '@theme/views/room/room';
import { NotFoundPage } from '@theme/views/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    data: {
      title: 'Home page'
    }
  },
  {
    path: 'settings',
    component: SettingsPage,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'rooms/:room',
    component: RoomPage,
    data: {
      title: 'Home page'
    }
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
