import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  I18nPipe,
} from './pipes';

import {
  ApiService,
  I18nService,
  LocalStorageService,
  SessionStorageService,
} from './services';

const COMPONENTS: any[] = [
];

const DIRECTIVES: any[] = [
];

const PIPES: any[] = [
  I18nPipe,
];

const SERVICES: any[] = [
  ApiService,
  I18nService,
  LocalStorageService,
  SessionStorageService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
  ],
  providers: [
    ...SERVICES,
  ]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    I18nService.init('en');

    return {
      ngModule: LibModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
