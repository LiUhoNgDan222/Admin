import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DaterangepickerConfig} from 'ng2-daterangepicker';
import {forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

declare var moment: any;

// 今天、昨天、明天  时间设置
const ranges = [
  [moment().subtract(1, 'days').startOf('days'), moment().subtract(1, 'days').endOf('days')],
  [moment().startOf('days'), moment()]
];

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['date-range-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateRangePickerComponent),
    multi: true
  }]
})
export class DateRangePickerComponent implements OnInit {
  // 默认时间
  public dateInput: any = {
    start: moment().startOf('days'),
    end: moment()
  };

  // 时间范围
  public daterange: any = {};

  // 日期格式配置
  public options: any = {
    locale: {format: 'YYYY-MM-DD',
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
    alwaysShowCalendars: false
  };

  constructor(private daterangepickerOptions: DaterangepickerConfig) {
    // 日期控件设置
    this.daterangepickerOptions.skipCSS = true;
    this.daterangepickerOptions.settings = this.options;
  }

  public onModelChange: Function = () => {};
  public onModelTouched: Function = () => {};
  writeValue(value: any) {
    if (value) {
      this.daterange = value;
      this.dateInput = value;
    }else {
      this.dateInput.start = '';
      this.dateInput.end = '';
      this.daterange.start = '';
      this.daterange.end = '';
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
    this.daterange.start = value.start;
    this.daterange.end = value.end;

    this.dateInput.start = value.start;
    this.dateInput.end = value.end;

    this.onModelChange(this.daterange);
  }

  public range(index: number) {
    this.daterange.start = ranges[index][0];
    this.daterange.end = ranges[index][1];

    this.dateInput.start = ranges[index][0];
    this.dateInput.end = ranges[index][1];

    this.onModelChange(this.daterange);
  }

  ngOnInit() {
  }

}
