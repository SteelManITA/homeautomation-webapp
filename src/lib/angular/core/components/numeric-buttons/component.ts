import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Utils } from './../../../../utils/core';

@Component({
  selector: 'lib-numeric-buttons',
  templateUrl: './component.html'
})
export class NumericButtonsComponent {
  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() minValue: number;
  @Input() maxValue: number;

  inc(): void {
    if (Utils.isNotDefined(this.maxValue) || this.value < this.maxValue) {
      ++this.value;
      this.valueChange.emit(this.value);
    }
  }

  dec(): void {
    if (Utils.isNotDefined(this.minValue) || this.value > this.minValue) {
      --this.value;
      this.valueChange.emit(this.value);
    }
  }
}
