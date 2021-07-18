import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hot-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  @Input() day = 0;

  constructor() {}

  ngOnInit(): void {}
}
