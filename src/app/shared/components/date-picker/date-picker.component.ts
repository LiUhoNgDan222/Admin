import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
declare var moment: any;

// 今天、昨天、本月、上月  时间设置
const ranges = [
  [moment().startOf('days'), moment()],
  [moment().subtract(1, 'days').startOf('days'), moment().subtract(1, 'days').endOf('days')],
  [moment().startOf('month'), moment()],
  [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
];

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() timepicker: EventEmitter<number> = new EventEmitter<number>();
  // 默认时间
  public dateInput: any = moment().startOf('days');

  // 时间范围
  public daterange: any ;

  // 日期格式配置
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };

  constructor(private daterangepickerOptions: DaterangepickerConfig) {
    // 日期控件设置
    this.daterangepickerOptions.skipCSS = true;
    this.daterangepickerOptions.settings = this.options;
  }

// 选择时间范围
  public selectedDate(value: any) {
    this.daterange = value.start.format('YYYY-MM-DD');
    this.dateInput = value.start;
    this.timepicker.emit(this.daterange);
  }

  ngOnInit() {
  }

}
