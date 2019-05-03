import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private readonly session: Storage;

  constructor(
  ) {
    this.session = window.sessionStorage;
  }

  set(key: string, data: any): void {
    this.session.setItem(key, JSON.stringify(data));
  }

  get(key: string): any {
    const data: string = this.session.getItem(key);
    if (data === 'undefined') {
      return undefined;
    } else {
      return JSON.parse(data);
    }
  }

  remove(key: string): void {
    this.session.removeItem(key);
  }

  getInstance(): Storage {
    return this.session;
  }
}
