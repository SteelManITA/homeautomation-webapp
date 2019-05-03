import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '@app/routes';

import { HomeAutomationRequestService } from '@app/services';

import { AppComponent } from '@app/component';
import { ThemeModule } from '@theme/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ThemeModule,
  ],
  providers: [
    HomeAutomationRequestService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
