import { Routes } from '@angular/router';
import { HomePage } from '@theme/views/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
