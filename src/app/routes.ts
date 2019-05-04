import { Routes } from '@angular/router';
import { HomePage } from '@theme/views/home/home';
import { RoomPage } from '@theme/views/room/room';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    data: {
      title: 'Home page'
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
  // {
  //   path: '**',
  //   component: NotFoundPage
  // }
];
