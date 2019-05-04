import { Component } from '@angular/core';
import { HomeAutomationRequestService } from '@app/services';
import { Room } from '@app/models';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  rooms: Room[] = [];
  devicesCount: number = 0;

  constructor(
    private request: HomeAutomationRequestService,
  ) {
    this.request.getRooms().
      then((rooms) => {
        console.log('riuscito', rooms);
        this.rooms = rooms;
        for (const room of this.rooms) {
          this.devicesCount += room.devices.length;
        }
      }).
      catch((err) => {
        console.log('fallito', err);
      });
  }
}
