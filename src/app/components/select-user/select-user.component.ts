import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectUserComponent),
      multi: true
    }
  ]
})
export class SelectUserComponent implements ControlValueAccessor, OnInit {
  val = '';
  users: any[] = [
    {id: 1, name: 'John', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'},
    {id: 2, name: 'Elliot', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'},
    {id: 3, name: 'Warren', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/3.jpg'},
    {id: 4, name: 'Blockchain', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/4.jpg'},
    {id: 5, name: 'Test', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/5.jpg'},
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
