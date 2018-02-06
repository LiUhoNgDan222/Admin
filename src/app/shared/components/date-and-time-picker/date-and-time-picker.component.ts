import {Component, OnInit} from '@angular/core';
import {DaterangepickerConfig} from 'ng2-daterangepicker';
import {forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

declare var $: any;
declare var moment: any;

// 今天、昨天、明天  时间设置
const ranges = [
  [moment().subtract(1, 'days').startOf('days'), moment().subtract(1, 'days').endOf('days')],
  [moment().startOf('days'), moment()],
  [moment().add(1, 'd').startOf('days'), moment().add(1, 'days').endOf('days')]
];

@Component({
  selector: 'app-date-and-time-picker',
  templateUrl: './date-and-time-picker.component.html',
  styleUrls: ['date-and-time-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateAndTimePickerComponent),
    multi: true
  }]
})
export class DateAndTimePickerComponent implements OnInit {
  // 默认时间
  public dateAndTimeInput: any = {
    start: moment().startOf('days'),
    end: moment()
  };

  // 时间范围
  public daterange1: any = {};

  public onModelChange: Function = () => {};
  public onModelTouched: Function = () => {};

  // 日期格式配置
  public options: any = {
    locale: {
      format: 'YYYY-MM-DD HH:mm:ss',
      applyLabel: '确定',
      cancelLabel: '取消',
      fromLabel: '起始时间',
      toLabel: '结束时间',
      customRangeLabel: '自定义',
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      firstDay: 1,
      minDays: 0,
      maxDays: 0
    },
    alwaysShowCalendars: false,
    timePicker: true,
    timePicker24Hour: true,
    timePickerSeconds: true
  };

  constructor() {
  }

  writeValue(value: any) {
    if (value) {
      this.daterange1 = value;
      this.dateAndTimeInput = value;
    } else {
      this.dateAndTimeInput.start = '';
      this.dateAndTimeInput.end = '';
      this.daterange1.start = '';
      this.daterange1.end = '';
    }
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

// 选择时间范围
  public selectedDate(value: any) {
    this.daterange1.start = value.start;
    this.daterange1.end = value.end;

    this.dateAndTimeInput.start = value.start;
    this.dateAndTimeInput.end = value.end;

    this.onModelChange(this.daterange1);
  }

  public range(index: number) {
    this.daterange1.start = ranges[index][0];
    this.daterange1.end = ranges[index][1];

    this.dateAndTimeInput.start = ranges[index][0];
    this.dateAndTimeInput.end = ranges[index][1];

    this.onModelChange(this.daterange1);
  }

  ngOnInit() {
  }

}
