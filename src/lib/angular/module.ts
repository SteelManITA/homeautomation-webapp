import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, ReflectiveInjector } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  SwitchComponent,
  NumericButtonsComponent,
  RadioGroupComponent,
} from './components';

import {
  I18nPipe,
  ImagePipe,
} from './pipes';

import {
  ApiService,
  I18nService,
  LocalStorageService,
  SessionStorageService,
} from './services';

const COMPONENTS: any[] = [
  SwitchComponent,
  NumericButtonsComponent,
  RadioGroupComponent,
];

const DIRECTIVES: any[] = [
];

const PIPES: any[] = [
  I18nPipe,
  ImagePipe,
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
    FormsModule,
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
    const injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([
      LocalStorageService
    ]);
    const localStorage: LocalStorageService = injector.get(LocalStorageService);
    const currLang: string = localStorage.get('currLang');

    I18nService.init(currLang);

    return {
      ngModule: LibModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
