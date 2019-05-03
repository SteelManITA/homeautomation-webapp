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
