import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DaterangepickerConfig} from 'ng2-daterangepicker';
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
    alwaysShowCalendars: false,
    singleDatePicker: true
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

  ngOnInit() {
  }

}
