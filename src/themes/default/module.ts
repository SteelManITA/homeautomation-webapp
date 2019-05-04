import { NgModule } from '@angular/core';

import { ComponentsModule } from '@theme/components/module';
import { ViewsModule } from '@theme/views/module';

@NgModule({
  declarations: [
  ],
  imports: [
    ComponentsModule,
    ViewsModule,
  ],
  exports: [
    ComponentsModule,
    ViewsModule,
  ]
})
export class DefaultThemeModule {}
