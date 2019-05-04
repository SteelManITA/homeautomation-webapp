import { NgModule } from '@angular/core';

import { HomeAutomationRequestService } from '@app/services';

import { AppComponent } from '@app/component';
import { DefaultThemeModule } from '@theme/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
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
