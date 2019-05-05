import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { Menu } from '@theme/models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed: boolean = false;
  menu: Menu = {
    items: [
      {
        selected: false,
        url: '',
        key: 'home',
      },
      {
        selected: false,
        url: 'automation',
        key: 'automation',
      },
      {
        selected: false,
        url: 'settings',
        key: 'settings',
      },
    ]
  };

  constructor(
    private router: Router,
  ) {
    this.router.events.
      pipe(filter(e => e instanceof NavigationEnd)).
      subscribe((route: NavigationEnd) => {
        this.menu.items.forEach((item, index, menu) => {
          if ( route.url.substr(1) === item.url
            || (
              route.url.substr(1) === ''
              && item.key === 'home'
            )
          ) {
            menu[index].selected = true;
          } else {
            menu[index].selected = false;
          }
        });
      });
  }

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
