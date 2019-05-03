import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storage: Storage;

  constructor(
  ) {
    this.storage = window.localStorage;
  }

  set(key: string, data: any): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  get(key: string, raw: boolean = false): any {
    const data: string = this.storage.getItem(key);
    if (data === 'undefined' || typeof data === 'undefined') {
      return undefined;
    } else if (raw) {
      return data;
    } else {
      return JSON.parse(data);
    }
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  getInstance(): Storage {
    return this.storage;
  }
}
