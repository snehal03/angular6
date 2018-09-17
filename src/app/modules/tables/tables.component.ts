import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  dataList = [];
  constructor() {}

  ngOnInit() {
    this.dataList = [
      {
        id: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      },
      {
        id: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat'
      },
      {
        id: 3,
        first: 'Larry',
        last: 'the Bird',
        handle: '@twitter'
      }
    ];
  }
}
