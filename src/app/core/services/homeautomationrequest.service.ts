import { Injectable } from '@angular/core';
import { ApiService, ApiResponse } from '@lib/angular/services';

export interface AirConditionerArgs {
  state: 'on' | 'off';
  mode: 'cool' | 'heat' | 'dry' | 'auto';
  fanSpeed: 'lowest' | 'low' | 'medium' | 'high' | 'highest' | 'auto';
  swing: 'lowest' | 'low' | 'medium' | 'high' | 'highest' | 'auto';
  temperature: 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
}

@Injectable()
export class HomeAutomationRequestService {
  constructor(
    protected apiService: ApiService,
  ) {
  }

  public sendData(id: number, data: AirConditionerArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.post('devices/' + id, {
        data: data
      }).
        then((response: ApiResponse) => {
          if (!response.error) {
            resolve(response.results);
          }
          reject(undefined);
        });
    });
  }

  public getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.get('devices').
        then((response: ApiResponse) => {
          if (!response.error) {
            resolve(response.results);
          }
          reject(undefined);
        });
    });
  }

  public get(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.get('devices/' + id).
        then((response: ApiResponse) => {
          if (!response.error) {
            resolve(response.results);
          }
          reject(undefined);
        });
    });
  }

  public getRooms(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.get('rooms').
        then((response: ApiResponse) => {
          if (!response.error) {
            resolve(response.results);
          }
          reject(undefined);
        });
    });
  }
}
