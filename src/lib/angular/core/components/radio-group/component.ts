import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Utils } from './../../../../utils/core';

@Component({
  selector: 'lib-radio-group',
  templateUrl: './component.html'
})
export class RadioGroupComponent implements OnInit {
  protected _value: any;

  @Input() name: string;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() radios: any[];

  @Input() set value(value: any) {
    this._value = value;
    this.valueChange.emit(value);
  }

  get value(): any {
    return this._value;
  }

  ngOnInit(): void {
    this.radios.map((radio) => {
      if (Utils.isNotDefined(radio.id)) {
        radio.id = 'lib-radio-' + this.name + '-' + Math.round((Math.random() * 100000));
      }
    });
  }
}
