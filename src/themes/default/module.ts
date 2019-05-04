import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from '@app/routes';

import { DefaultTheme } from './default';
import { ComponentsModule } from '@theme/components/module';
import { ViewsModule } from '@theme/views/module';

@NgModule({
  declarations: [
    DefaultTheme,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    ViewsModule,
  ],
  exports: [
    DefaultTheme,
    ComponentsModule,
    ViewsModule,
  ]
})
export class DefaultThemeModule {}
