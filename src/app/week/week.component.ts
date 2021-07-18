import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hot-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
})
export class WeekComponent implements OnInit {
  @Input() days: number[] = [];

  constructor() {}

  ngOnInit(): void {}
}
