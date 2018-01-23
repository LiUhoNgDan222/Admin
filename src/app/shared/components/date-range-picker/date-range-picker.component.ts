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
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {

  @Output() timepicker: EventEmitter<number> = new EventEmitter<number>();
  // 默认时间
  public dateInput: any = {
    start: moment().startOf('days'),
    end: moment()
  };

  // 时间范围
  public daterange: any = {};

  // 日期格式配置
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false
  };

  constructor(private daterangepickerOptions: DaterangepickerConfig) {
    // 日期控件设置
    this.daterangepickerOptions.skipCSS = true;
    this.daterangepickerOptions.settings = this.options;
  }

// 选择时间范围
  public selectedDate(value: any) {
    this.daterange.start = value.start.format('YYYY-MM-DD');
    this.daterange.end = value.end.format('YYYY-MM-DD');

    this.dateInput.start = value.start;
    this.dateInput.end = value.end;
    // console.log("子组件日期-自定义范围");
    this.timepicker.emit(this.daterange);
  }

  public range(index: number) {
    this.daterange.start = ranges[index][0].format('YYYY-MM-DD');
    this.daterange.end =  ranges[index][1].format('YYYY-MM-DD');

    this.dateInput.start = ranges[index][0];
    this.dateInput.end = ranges[index][1];

    // console.log("子组件日期-固定范围");
    this.timepicker.emit(this.daterange);
  }

  ngOnInit() {
  }

}
