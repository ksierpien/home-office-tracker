import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hot-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  weeks = [
    [0, 0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
  ];

  constructor() {}

  ngOnInit(): void {}
}
