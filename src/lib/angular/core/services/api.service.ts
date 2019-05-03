import { Injectable } from '@angular/core';
import { WebRequest } from '@tripoow/webrequest';

import { ENV } from '@env/environment';

export interface ApiResponse {
  error: boolean;
  status: number;
  message: string;
  results: any;
}

@Injectable()
export class ApiService {
  protected API_URL: string;
  protected headers: {[key: string]: string} = {};
  protected request: WebRequest = new WebRequest;

  constructor(
  ) {
    this.API_URL = ENV.API[ENV.TARGET.toUpperCase()];
    if (ENV.API.VER) {
      this.API_URL += '/' + ENV.API.VER;
    }
  }

  public post(url: string, data?: {[key: string]: any}): Promise<ApiResponse> {
    return this.request.post<ApiResponse, any>(this.API_URL + url, data);
  }

  public get(url: string, data?: {[key: string]: any}): Promise<ApiResponse> {
    return this.request.get(this.API_URL + url, data);
  }

  public delete(url: string, data?: {[key: string]: any}): Promise<ApiResponse> {
    return this.request.delete(this.API_URL + url, data);
  }

  public put(url: string, data?: {[key: string]: any}): Promise<ApiResponse> {
    return this.request.put(this.API_URL + url, data);
  }
}
