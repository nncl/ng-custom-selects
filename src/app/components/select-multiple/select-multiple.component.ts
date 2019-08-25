import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleComponent),
      multi: true
    }
  ]
})
export class SelectMultipleComponent implements ControlValueAccessor, OnInit {
  val = '';
  groups = [{id: 1, name: 'Group 1'}, {id: 2, name: 'Group 2'}, {id: 3, name: 'Group 3'}];

  constructor() {
  }

  ngOnInit() {
  }

  onChange: any = (a, b) => {
  };

  onTouch: any = () => {
  };

  get value() {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

}
