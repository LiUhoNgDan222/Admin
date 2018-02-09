/**
 * Created by liuhdan on 2017/7/27.
 */
export const menus = [
  {
    index: 0,
    id: 'home',
    item: 'Dashboard',
    isActive: false,
    plusActive : 'active',
    minusActive: 'inactive',
    icon: 'fa-home',
    routerLink: '/',
    list: []
  },
  {
    index: 1,
    id: 'components',
    item: '组件示例',
    isActive: false,
    plusActive : 'active',
    minusActive: 'inactive',
    icon: 'fa-asterisk',
    list: [
      {
        id: 1,
        item: 'Table',
        routerLink: '/components/table',
        icon: 'fa-table',
        isActive: false
      },
      {
        id: 2,
        item: 'Buttons',
        routerLink: '/components/button',
        icon: 'fa-toggle-on',
        isActive: false
      },
      {
        id: 3,
        item: 'Checkbox&Radio',
        routerLink: '/components/switch',
        icon: 'fa-check-square',
        isActive: false
      },
      {
        id: 4,
        item: 'Datepicker',
        routerLink: '/components/datepicker',
        icon: 'fa-calendar',
        isActive: false
      },
      {
        id: 5,
        item: 'Toast',
        routerLink: '/components/toast',
        icon: 'fa-columns',
        isActive: false
      },
      {
        id: 6,
        item: 'Modal',
        routerLink: '/components/modal',
        icon: 'fa-window-restore',
        isActive: false
      }
    ]
  },
  {
    index: 2,
    id: 'pages',
    item: '页面示例',
    isActive: false,
    plusActive : 'active',
    minusActive: 'inactive',
    icon: 'fa-file',
    list: [
      {
        id: 1,
        item: '404',
        routerLink: '/404',
        icon: 'fa-exclamation-triangle',
        isActive: false
      },
      {
        id: 2,
        item: 'Profile',
        routerLink: '/pages/profile',
        icon: 'fa-user',
        isActive: false
      },
      {
        id: 3,
        item: 'Mail',
        routerLink: '/pages/mail',
        icon: 'fa-envelope',
        isActive: false
      }
    ]
  }
  // {
  //   index: 2,
  //   id: 'pipeline',
  //   item: '业务流水',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-file-text-o',
  //   list: [
  //     {
  //       id: 1,
  //       item: '提现请求',
  //       routerLink: '/pipeline/presentRequest',
  //       icon: 'fa-reply',
  //       isActive: false
  //     },
  //     {
  //       id: 2,
  //       item: '提现记录',
  //       routerLink: '/pipeline/presentRecord',
  //       icon: 'fa-file-text-o',
  //       isActive: false
  //     },
  //     {
  //       id: 3,
  //       item: '充值记录',
  //       routerLink: '/pipeline/rechargeRecord',
  //       icon: 'fa-exchange',
  //       isActive: false
  //     },
  //     {
  //       id: 4,
  //       item: '普通投注',
  //       routerLink: '/pipeline/generalBet',
  //       icon: 'fa-eercast',
  //       isActive: false
  //     },
  //     {
  //       id: 5,
  //       item: '账变明细',
  //       routerLink: '/pipeline/accountDetail',
  //       icon: 'fa-reorder',
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   index: 3,
  //   id: 'lotteryData',
  //   item: '开奖数据',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-database',
  //   routerLink: '/lotteryData',
  //   list: []
  // },
  // {
  //   index: 4,
  //   id: 'timeManage',
  //   item: '时间管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-clock-o',
  //   routerLink: '/timeManage',
  //   list: []
  // },
  // {
  //   index: 5,
  //   id: 'statistics',
  //   item: '数据统计',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-pie-chart',
  //   list: [
  //     {
  //       id: 1,
  //       item: '统计概况',
  //       routerLink: '/statistics/survey',
  //       icon: 'fa-sticky-note-o'
  //     },
  //     {
  //       id: 2,
  //       item: '综合统计',
  //       routerLink: '/statistics/generalStatistics',
  //       icon: 'fa-hourglass-o'
  //     },
  //     {
  //       id: 3,
  //       item: '开奖检测',
  //       routerLink: '/statistics/lotteryTest',
  //       icon: 'fa-retweet'
  //     }
  //   ]
  // },
  // {
  //   index: 6,
  //   id: 'userManage',
  //   item: '用户管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-user-circle',
  //   list: [
  //     {
  //       id: 1,
  //       item: '增加会员',
  //       routerLink: '/userManage/addMember',
  //       icon: 'fa-user-plus'
  //     },
  //     {
  //       id: 2,
  //       item: '用户列表',
  //       routerLink: '/userManage/userList',
  //       icon: 'fa-bars'
  //     },
  //     {
  //       id: 3,
  //       item: '银行信息',
  //       routerLink: '/userManage/bankInfo',
  //       icon: 'fa-bank'
  //     },
  //     {
  //       id: 4,
  //       item: '登录信息',
  //       routerLink: '/userManage/loginInfo',
  //       icon: 'fa-sign-in'
  //     },
  //     {
  //       id: 5,
  //       item: '用户限额设置',
  //       routerLink: '/userManage/userQuota',
  //       icon: 'fa-cog'
  //     }
  //   ]
  // },
  // {
  //   index: 7,
  //   id: 'manager',
  //   item: '管理人员',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-users',
  //   list: [
  //     {
  //       id: 1,
  //       item: '管理员列表',
  //       routerLink: '/manager/managerList',
  //       icon: 'fa-bars'
  //     },
  //     {
  //       id: 2,
  //       item: '操作日志',
  //       routerLink: '/manager/operationLog',
  //       icon: 'fa-file-text-o'
  //     },
  //     {
  //       id: 3,
  //       item: '登陆日志',
  //       routerLink: '/manager/loginLog',
  //       icon: 'fa-sign-in'
  //     }
  //   ]
  // },
  // {
  //   index: 8,
  //   id: 'commissions',
  //   item: '佣金管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-dollar',
  //   routerLink: '/commissions',
  //   list: []
  // },
  // {
  //   index: 9,
  //   id: 'dividend',
  //   item: '分红管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-gift',
  //   list: [
  //     {
  //       id: 1,
  //       item: '分红发放',
  //       routerLink: '/dividend/dividendPayment',
  //       icon: 'fa-send-o'
  //     },
  //     {
  //       id: 2,
  //       item: '分红发放记录',
  //       routerLink: '/dividend/dividendRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 10,
  //   id: 'setting',
  //   item: '系统设置',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-cogs',
  //   list: [
  //     {
  //       id: 1,
  //       item: '系统设置',
  //       routerLink: '/setting/systemSetting',
  //       icon: 'fa-cog'
  //     },
  //     {
  //       id: 2,
  //       item: '公告中心',
  //       routerLink: '/setting/announceCenter',
  //       icon: 'fa-bell-o'
  //     },
  //     {
  //       id: 3,
  //       item: '收款设置',
  //       routerLink: '/setting/receiveSetting',
  //       icon: 'fa-handshake-o'
  //     },
  //     {
  //       id: 4,
  //       item: '彩种管理',
  //       routerLink: '/setting/lotteryManage',
  //       icon: 'fa-ravelry'
  //     },
  //     {
  //       id: 5,
  //       item: '玩法管理',
  //       routerLink: '/setting/playManage',
  //       icon: 'fa-slideshare'
  //     },
  //     {
  //       id: 6,
  //       item: '六合彩管理',
  //       routerLink: '/setting/markSixManage',
  //       icon: 'fa-connectdevelop'
  //     },
  //     {
  //       id: 7,
  //       item: '等级设置',
  //       routerLink: '/setting/rankSetting',
  //       icon: 'fa-list-ol'
  //     }
  //   ]
  // },
  // {
  //   index: 11,
  //   id: 'stationLetter',
  //   item: '站内信管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-envelope-o',
  //   list: [
  //     {
  //       id: 1,
  //       item: '发消息',
  //       routerLink: '/stationLetter/sendMessage',
  //       icon: 'fa-send'
  //     },
  //     {
  //       id: 2,
  //       item: '收件箱',
  //       routerLink: '/stationLetter/inbox',
  //       icon: 'fa-envelope'
  //     },
  //     {
  //       id: 3,
  //       item: '发件箱',
  //       routerLink: '/stationLetter/outbox',
  //       icon: 'fa-envelope-open-o'
  //     },
  //     {
  //       id: 4,
  //       item: '整站发信记录',
  //       routerLink: '/stationLetter/stationRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 12,
  //   id: 'customerRelation',
  //   item: '客户关系管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-sitemap',
  //   routerLink: '/customerRelation',
  //   list: []
  // },
  // {
  //   index: 13,
  //   id: 'exchange',
  //   item: '积分兑换管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-star',
  //   list: [
  //     {
  //       id: 1,
  //       item: '兑换管理',
  //       routerLink: '/exchange/exchangeManager',
  //       icon: 'fa-exchange'
  //     },
  //     {
  //       id: 2,
  //       item: '兑换记录',
  //       routerLink: '/exchange/exchangeRecord',
  //       icon: 'fa-stack-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 14,
  //   id: 'investment',
  //   item: '投资理财管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-scribd',
  //   list: [
  //     {
  //       id: 1,
  //       item: '投资理财配置',
  //       routerLink: '/investment/investmentSetting',
  //       icon: 'fa-cogs'
  //     },
  //     {
  //       id: 2,
  //       item: '存款管理',
  //       routerLink: '/investment/depositManage',
  //       icon: 'fa-mail-reply'
  //     },
  //     {
  //       id: 3,
  //       item: '取款管理',
  //       routerLink: '/investment/withdrawalManage',
  //       icon: 'fa-mail-forward'
  //     }
  //   ]
  // },
  // {
  //   index: 15,
  //   id: 'luckeggManage',
  //   item: '幸运砸蛋管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-magnet',
  //   list: [
  //     {
  //       id: 1,
  //       item: '砸蛋配置',
  //       routerLink: '/luckeggManage/luckeggSetting',
  //       icon: 'fa-cog'
  //     },
  //     {
  //       id: 2,
  //       item: '砸蛋记录',
  //       routerLink: '/luckeggManage/luckeggRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 16,
  //   id: 'luckTurntable',
  //   item: '幸运大转盘管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-spinner',
  //   list: [
  //     {
  //       id: 1,
  //       item: '大转盘配置',
  //       routerLink: '/luckTurntable/turntableSetting',
  //       icon: 'fa-cog'
  //     },
  //     {
  //       id: 2,
  //       item: '中奖记录',
  //       routerLink: '/luckTurntable/turntableRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 17,
  //   id: 'recharge',
  //   item: '充值活动管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-skype',
  //   list: [
  //     {
  //       id: 1,
  //       item: '充值活动管理',
  //       routerLink: '/recharge/rechargeManage',
  //       icon: 'fa-cog'
  //     },
  //     {
  //       id: 2,
  //       item: '充值活动记录',
  //       routerLink: '/recharge/rechargeRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 18,
  //   id: 'commissionActivity',
  //   item: '佣金活动管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-cny',
  //   list: [
  //     {
  //       id: 1,
  //       item: '佣金设置',
  //       routerLink: '/commissionActivity/commissionSetting',
  //       icon: 'fa-cog'
  //     },
  //     {
  //       id: 2,
  //       item: '领取记录',
  //       routerLink: '/commissionActivity/commissionRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 19,
  //   id: 'vipConsume',
  //   item: 'VIP消费管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-database',
  //   list: [
  //     {
  //       id: 1,
  //       item: '活动管理',
  //       routerLink: '/vipConsume/vipActManage',
  //       icon: 'fa-cog'
  //     },
  //     {
  //       id: 2,
  //       item: '领取记录',
  //       routerLink: '/vipConsume/vipActRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // },
  // {
  //   index: 20,
  //   id: 'luckDraw',
  //   item: '幸运大抽奖管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-support',
  //   list: [
  //     {
  //       id: 1,
  //       item: '增加奖金区间',
  //       routerLink: '/luckDraw/addBonus',
  //       icon: 'fa-plus-square'
  //     },
  //     {
  //       id: 2,
  //       item: '奖金区间列表',
  //       routerLink: '/luckDraw/bonusList',
  //       icon: 'fa-bars'
  //     },
  //     {
  //       id: 3,
  //       item: '用户抽奖明细',
  //       routerLink: '/luckDraw/bonusDetail',
  //       icon: 'fa-file-text-o'
  //     }
  //   ]
  // },
  // {
  //   index: 21,
  //   id: 'cardManage',
  //   item: '点卡管理',
  //   isActive: false,
  //   plusActive : 'active',
  //   minusActive: 'inactive',
  //   icon: 'fa-credit-card-alt',
  //   list: [
  //     {
  //       id: 1,
  //       item: '卡密列表',
  //       routerLink: '/cardManage/camiList',
  //       icon: 'fa-tasks'
  //     },
  //     {
  //       id: 2,
  //       item: '兑换记录',
  //       routerLink: '/cardManage/camiRecord',
  //       icon: 'fa-exchange'
  //     }
  //   ]
  // }
];

