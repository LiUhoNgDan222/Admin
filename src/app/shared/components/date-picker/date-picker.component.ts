import {Component, OnInit} from '@angular/core';
import {forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

declare var moment: any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['date-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
  }]
})
export class DatePickerComponent implements OnInit {
  // 默认时间
  public singleDate: any;

  // 时间范围
  public daterange: any = {};

  public onModelChange: Function = () => {};
  public onModelTouched: Function = () => {};

  // 日期格式配置
  public singlePicker: any = {
    locale: {format: 'YYYY-MM-DD',
      applyLabel: '确定',
      cancelLabel: '取消',
      customRangeLabel: '自定义',
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      firstDay: 1,
      minDays: 0,
      maxDays: 0
    },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };

  constructor() {
    this.singleDate = Date.now();
  }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value) {
      this.daterange = value;
    } else {
      this.daterange.start = '';
      this.daterange.end = '';
      this.singleDate = '';
    }
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  private singleSelect(value: any) {
    this.singleDate = value.start;
    this.onModelChange(this.daterange);
  }
}
