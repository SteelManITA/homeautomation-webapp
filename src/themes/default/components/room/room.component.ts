import { Component, Input } from '@angular/core';
import { Room } from '@app/models';

@Component({
  selector: 'app-room',
  templateUrl: './room.html'
})
export class RoomComponent {
  @Input() model: Room;
}
