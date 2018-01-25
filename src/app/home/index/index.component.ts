import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('myEcharts1') myEcharts1: ElementRef;
  @ViewChild('myEcharts2') myEcharts2: ElementRef;
  public myEcharts11: any;  // echarts1
  public myEcharts12: any;  // echarts2

  public surplus_list: any[] = []; // 剩余
  public profit_loss_list: any[] = []; // 每月盈亏列表
  public today_profit_loss: number;  // 今日统计盈亏
  public today_betting_amount: number; // 今日统计投注额
  public yesterday_profit_los: number; // 昨日统计盈亏
  public yesterday_betting_amount: number; // 昨日统计投注额
  public lottery_bets_statistics_list: any[] = []; // 彩种投注金额统计
  public month: number;  // 当前月
  public year: number; // 当前年

  constructor() {
  }

  protected todayDataOption = {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b}: {c}{a}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#7d8692'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '(元)',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      }
    ],
    series: [
      {
        name: '元',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          normal: {
            color: function (params) {
              const colorList = ['#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD'];
              return colorList[params.dataIndex];
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}'
            }
          }
        }
      }
    ]
  };
  protected UserOption = {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b}: {c}{a}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['土豆', '番茄', '草莓', '可乐', '雪碧', '芒果'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#7d8692'
          }
        }
      }
    ],
    yAxis: [
      {
        name: '(人数)',
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      }
    ],
    series: [
      {
        name: '人',
        type: 'bar',
        barWidth: '60%',
        data: [13, 24, 5, 4, 22, 9],
        itemStyle: {
          normal: {
            color: function (params) {
              const colorList = ['#FE8463', '#f76262', '#7fcaa1', '#F4E001', '#F0805A', '#26C0C0'];
              return colorList[params.dataIndex];
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}'
            }
          }
        }
      }
    ]
  };

  ngOnInit() {
    this.myEcharts11 = echarts.init(this.myEcharts1.nativeElement);
    this.myEcharts12 = echarts.init(this.myEcharts2.nativeElement);
    this.getProfitLoss();
    const date = new Date();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
  }

  protected getProfitLoss(): void {
    this.profit_loss_list = [{'month_name': '2018.01', 'bet_amount': 1434.44, 'win_amount': 342.56}];
    for (let i = 0; i < 5 - this.profit_loss_list.length; i++) {
      this.surplus_list.push({'name': '--'});
    }
    this.today_profit_loss = 47648;
    this.today_betting_amount = 6742;
    this.yesterday_profit_los = 8865;
    this.yesterday_betting_amount = 4667;
    this.myEcharts11.setOption(this.todayDataOption);
    this.myEcharts12.setOption(this.UserOption);
    for (let i = 0; i < 40; i++) {
      this.lottery_bets_statistics_list.push({'game_name': '可乐', 'bets_money': 324});
    }
  }

  public refresh(id: number) {
    if (id === 1) {
      this.myEcharts11.showLoading();
      setTimeout(() => {
        this.myEcharts11.hideLoading();
      }, 1500);
    }
    if (id === 2) {
      this.myEcharts12.showLoading();
      setTimeout(() => {
        this.myEcharts12.hideLoading();
      }, 1500);
    }
  }
}

