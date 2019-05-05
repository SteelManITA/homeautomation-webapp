import { I18nService } from '@lib/angular/core/services/i18n.service';
import { Component } from '@angular/core';
import { LocalStorageService } from '@lib/angular/core/services/local-storage.service';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private lang: 'it' | 'en';

  constructor(
    localStorage: LocalStorageService,
  ) {
    this.lang = localStorage.get('currLang');
  }

  toggle(): void {
    if (this.lang === 'it') {
      this.lang = 'en';
    } else {
      this.lang = 'it';
    }
    I18nService.init(this.lang);
  }
}
