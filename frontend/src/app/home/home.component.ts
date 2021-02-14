import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  type: string;
  quantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Sample Book', quantity: 1, type: 'Book'},
  {name: 'Sample Game', quantity: 2, type: 'Game'},
  {name: 'Sample Book', quantity: 4, type: 'Book'},
  {name: 'Sample Music', quantity: 3, type: 'Music'},
  {name: 'Sample Music', quantity: 12, type: 'Music'},
  {name: 'Sample Game', quantity: 6, type: 'Game'},
  {name: 'Sample Game', quantity: 9, type: 'Game'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'type'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void { }
}
