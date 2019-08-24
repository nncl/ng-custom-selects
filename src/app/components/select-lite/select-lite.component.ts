import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-lite',
  templateUrl: './select-lite.component.html',
  styleUrls: ['./select-lite.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectLiteComponent),
      multi: true
    }
  ]
})
export class SelectLiteComponent implements ControlValueAccessor, OnInit {
  val = '';
  people: any[] = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Elliot'},
    {id: 3, name: 'Warren'},
    {id: 4, name: 'Blockchain'},
    {id: 5, name: 'Test'},
  ];

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
