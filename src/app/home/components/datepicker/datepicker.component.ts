import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  public date: any = {}; // 日期
  public date1: any = {}; // 日期

  constructor() {
  }

  ngOnInit() {

  }
}

