// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '@lib/utils';

export const ENV: Environment = {
  TARGET: 'development',
  API: {
    PRODUCTION: '127.0.0.1/api/',
    DEVELOPMENT: '127.0.0.1/devapi/',
    VER: 'v1',
    LOGIN: 'auth/login',
    LOGIN_REFRESH: 'auth/login/refresh',
    LOGOUT: 'auth/logout',
    SIGNUP: 'users',
    SEND_ERRORS: false,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
