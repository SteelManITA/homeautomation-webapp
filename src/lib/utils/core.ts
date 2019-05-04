export interface Api {
  DEVELOPMENT: string;
  PRODUCTION: string;
  STAGE?: string;
  VER?: string;
  LOGIN?: string;
  LOGIN_REFRESH?: string;
  LOGOUT?: string;
  SIGNUP?: string;
  SEND_ERRORS?: boolean;
}

export interface Environment {
  TARGET: 'development' | 'production' | 'stage';
  API?: Api;
}

export class Utils {
  static isDefined(value: any): boolean {
    return value !== undefined && value !== null;
  }

  static isNotDefined(value: any): boolean {
    return value === undefined || value === null;
  }

  static isDate(string: string): boolean {
    return !isNaN(new Date(string).getTime())
      ? true
      : false;
  }

  static containsDate(string: string): number {
    return string.search(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);
  }

  static isObject(value: any): boolean {
    return typeof value === 'object';
  }

  static isTrueObject(value: any): boolean {
    return Utils.isDefined(value) && Utils.isObject(value);
  }

  static imageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img: HTMLImageElement = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  static normalize(min: number, max: number, value: number): Number {
    return (value - min) / (max - min);
  }

  static diffMilliseconds(dateEnd: Date, dateBegin: Date): number {
    return (dateEnd.valueOf() - dateBegin.valueOf());
  }

  static equalObjects(obj1: Object, obj2: Object): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  static setDotObject(obj: Object, path: string, val: any): Object {
    for (const step of path.split('.')) {
      if (obj.hasOwnProperty(step)) {
        obj = obj[step];
      } else {
        // TODO: creare i vari step come oggetti
        return;
      }
    }
    obj = val;
  }

  static getDotObject(obj: Object, path: string): any {
    for (const step of path.split('.')) {
      if (obj.hasOwnProperty(step)) {
        obj = obj[step];
      } else {
        return undefined;
      }
    }
    return obj;
  }
}
