import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Utils } from './../../../../utils/core';

@Component({
  selector: 'lib-switch',
  templateUrl: './component.html'
})
export class SwitchComponent implements OnInit {
  @Input() id: string;
  @Input() state: boolean = false;
  @Input() label: string;
  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (Utils.isNotDefined(this.id)) {
      this.id = 'lib-switch-' + Math.round((Math.random() * 100000));
    }
  }

  onStateChanges(): void {
    this.stateChange.emit(this.state);
  }
}
