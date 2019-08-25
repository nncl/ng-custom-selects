import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  group: string;
  selectLite: string;
  user: string;
  groups: [];

  constructor() { }

  ngOnInit() {
  }

}
