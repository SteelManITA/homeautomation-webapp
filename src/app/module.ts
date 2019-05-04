import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '@app/routes';

import { HomeAutomationRequestService } from '@app/services';

import { AppComponent } from '@app/component';
import { DefaultThemeModule } from '@theme/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DefaultThemeModule,
  ],
  providers: [
    HomeAutomationRequestService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
