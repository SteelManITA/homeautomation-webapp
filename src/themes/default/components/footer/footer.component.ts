import { Component } from '@angular/core';
import { Footer } from '@theme/models/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  footer: Footer = {
    columns: [
      {
        key: 'Titolo',
        items: [
          {
            url: 'lorem-ipsum',
            key: 'lorem-ipsum',
          },
          {
            url: 'lorem-ipsum',
            key: 'lorem-ipsum',
          },
        ],
      },
      {
        key: 'Titolo2',
        items: [
          {
            url: 'lorem-ipsum',
            key: 'lorem-ipsum',
          },
          {
            url: 'lorem-ipsum',
            key: 'lorem-ipsum',
          },
        ],
      },
      {
        key: 'Titolo3',
        items: [
          {
            url: 'lorem-ipsum',
            key: 'lorem-ipsum',
          },
          {
            url: 'lorem-ipsum',
            key: 'lorem-ipsum',
          },
        ],
      },
    ],
  };
}
