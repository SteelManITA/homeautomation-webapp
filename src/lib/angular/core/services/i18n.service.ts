import { Injectable, ReflectiveInjector } from '@angular/core';

import { Utils } from './../../../utils/core';
import { LocalStorageService } from './local-storage.service';

import { WebRequest } from '@tripoow/webrequest';

@Injectable()
export class I18nService {
  private static initialized: boolean = false;

  constructor(
    protected localStorage: LocalStorageService,
  ) {
  }

  public static init(lang: string): Promise<boolean> {
    return new Promise(resolve => {
      this.initialized = true;

      const injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([
        LocalStorageService
      ]);

      const localStorage: LocalStorageService = injector.get(LocalStorageService);

      const request: WebRequest = new WebRequest();
      request
        .get<any>('assets/lang/' + lang + '.json')
        .then((response: {[key: string]: any}) => {
          localStorage.set('lang', response);
          resolve(true);
        })
        .catch((e: Error) => {
          console.log(e);
          request.get('assets/lang/it.json').
            then((response: {[key: string]: any}) => {
              localStorage.set('lang', response);
              resolve(true);
            }).
            catch(() => {
              throw new Error('Missing it.json in assets/lang/');
            });
        });
    });
  }

  private translateDate(date: string): string {
    return new Date(date).toLocaleDateString('it-IT');
  }

  private translateText(key: string): string {
    const lang: any = this.localStorage.get('lang');
    if (Utils.isNotDefined(lang)) {
      return key.replace(/[.-]/g, ' ');
    }
    const text: string = Utils.getDotObject(lang, key);
    return Utils.isDefined(text)
      ? text
      : key.replace(/[.-]/g, ' ');
  }

  public phrase(key: string): string {
    if (!I18nService.initialized) {
      throw new Error('I18nService was not initialized');
    }

    if (Utils.isNotDefined(key)) {
      return '';
    }

    if (Utils.isDate(key)) {
      return this.translateDate(key);
    }

    const datePosition: number = Utils.containsDate(key);
    if (datePosition === -1) {
      return this.translateText(key);
    } else {
      return this.translateText(key.substr(0, datePosition))
        + this.translateDate(key.substr(datePosition, 10))
        + this.translateText(key.substr(datePosition + 10, key.length));
    }
  }
}
