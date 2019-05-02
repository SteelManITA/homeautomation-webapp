import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

const COMPONENTS: any[] = [
];

const DIRECTIVES: any[] = [
];

const PIPES: any[] = [
];

const SERVICES: any[] = [
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
    return {
      ngModule: LibModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
