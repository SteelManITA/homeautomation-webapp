import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeAutomationRequestService } from '@app/services';
import { ParametersService } from '@lib/angular/services';

import { Utils } from '@lib/utils';
import { Room } from '@app/models';

@Component({
  templateUrl: 'room.html'
})
export class RoomPage implements OnInit {
  room: Room;
  deviceId: number;

  constructor(
    private request: HomeAutomationRequestService,
    private params: ParametersService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const roomName: string = this.params.getParams().room;

    this.request.getRooms().
      then((rooms: Room[]) => {
        this.room = rooms.find(room => room.name === roomName);
        if (Utils.isNotDefined(this.room)) {
          this.router.navigateByUrl('/');
        }
        if (this.room.devices.length > 0) {
          this.deviceId = this.room.devices[0].id;
        }
      });
  }

  send(data: any): void {
    this.request.sendData(data.id, data).
      then((value) => {
        console.log('riuscito', value);
      }).
      catch((err) => {
        console.log('fallito', err);
      });
  }

  showDevice(event: Event, id: number): void {
    if (Utils.isDefined(event)) {
      event.preventDefault();
    }
    this.deviceId = id;
  }
}
