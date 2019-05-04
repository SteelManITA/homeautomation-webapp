import { Component } from '@angular/core';

@Component({
  selector: 'app-default-theme',
  template: `
    <div id="app">
      <app-header></app-header>
      <div id="content">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `
})
export class DefaultTheme {
}
