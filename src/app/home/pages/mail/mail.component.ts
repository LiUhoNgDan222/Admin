import {Component, OnInit, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {MailService} from '../../../shared/service/mail.service';
import {OpenToastrService} from '../../../shared/service/open-toastr.service';
import {ModalService} from '../../../shared/components/modal/modal.service';
import {ConfirmConfig} from '../../../shared/components/modal/modal-model';

declare var moment: any;

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  providers: [MailService, ModalService]
})
export class MailComponent implements OnInit {

  @ViewChildren('input0') todayInput: QueryList<ElementRef>;
  @ViewChildren('input1') yesterdayInput: QueryList<ElementRef>;
  @ViewChildren('input2') beforeInput: QueryList<ElementRef>;

  public account: any = {'username': 'LiUhoNgDan'}; // 个人信息
  public page = {index: 1, count: 10};
  protected datetime; // 时间
  public username; // 用户名
  public state = '3'; // 状态
  public todayList: any[] = []; // 今天的列表
  public yesterdayList: any[] = []; // 昨天的列表
  public beforeList: any[] = []; // 更早的列表
  public list_count: number = 0; // 列表总数
  public list_page: any[] = []; // 页数

  public date: any = {}; // 日期
  public deleteId: any[] = []; // 删除id列表
  public msgInfo = {
    'touser': 'member',  // 收件人类型
    'title': '',  // 标题
    'content': ''  // 内容
  };
  public name = ''; // 发送人

  constructor(protected mailService: MailService,
              protected openToastrService: OpenToastrService,
              protected modalService: ModalService) {
  }

  ngOnInit() {
    this.loadList(1);
  }

  public loadList(index): void {
    this.mailService.mail().subscribe((res) => {
      // 清空数据
      this.todayList = [];
      this.yesterdayList = [];
      this.beforeList = [];
      this.list_page = [];

      this.list_count = res.length;
      const pages = Math.ceil(this.list_count / this.page.count)
      for (let i = 1; i <= pages; i++) {
        if (i === index) {
          this.list_page.push({'isActive': true, 'page': i});
        } else {
          this.list_page.push({'isActive': false, 'page': i});
        }
      }
      res.forEach((item) => {
        item['isActive'] = false;
        item['isClick'] = false;
        const time = moment(item.time * 1000).format('YYYY-MM-DD');
        if (time === moment().subtract(1, 'day').format('YYYY-MM-DD')) { // 昨天
          this.yesterdayList.push(item);
        } else if (time === moment().format('YYYY-MM-DD')) { // 今天
          this.todayList.push(item);
        } else {  // 更早
          this.beforeList.push(item);
        }
      });
    }, (error) => {
      console.log(error);
    });
  }

  // 改变点击之后的样式
  public changeClass(id: number) {
    this.todayList.forEach((item) => {
      if (item.mid === id) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
    });
    this.yesterdayList.forEach((item) => {
      if (item.mid === id) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
    });

    this.beforeList.forEach((item) => {
      if (item.mid === id) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
    });
  }

  // 全选
  public selectAll(type): void {
    if (type === 0) {
      for (let i = 0; i < this.todayList.length; i++) {
        this.todayList[i].isClick = !this.todayList[i].isClick;
        const inputList = this.todayInput.toArray();
        inputList[i].nativeElement.checked = !inputList[i].nativeElement.checked;
        if (inputList[i].nativeElement.checked) {
          this.deleteId.push(this.todayList[i].mid);
        } else {
          this.deleteId.splice(this.deleteId.indexOf(this.todayList[i].mid), 1);
        }
      }
    } else if (type === 1) {
      for (let i = 0; i < this.yesterdayList.length; i++) {
        this.yesterdayList[i].isClick = !this.yesterdayList[i].isClick;
        const inputList = this.yesterdayInput.toArray();
        inputList[i].nativeElement.checked = !inputList[i].nativeElement.checked;
        if (inputList[i].nativeElement.checked) {
          this.deleteId.push(this.yesterdayList[i].mid);
        } else {
          this.deleteId.splice(this.deleteId.indexOf(this.yesterdayList[i].mid), 1);
        }
      }
    } else if (type === 2) {
      for (let i = 0; i < this.beforeList.length; i++) {
        this.beforeList[i].isClick = !this.beforeList[i].isClick;
        const inputList = this.beforeInput.toArray();
        inputList[i].nativeElement.checked = !inputList[i].nativeElement.checked;
        if (inputList[i].nativeElement.checked) {
          this.deleteId.push(this.beforeList[i].mid);
        } else {
          this.deleteId.splice(this.deleteId.indexOf(this.beforeList[i].mid), 1);
        }
      }
    }
  }

  // 得到要删除的id
  public changeDeleteId(id, type): void {
    // type: 0-今天; 1-昨天; 2-更早
    if (type === 0) {
      this.todayList.forEach((item) => {
        if (item.mid === id) {
          item.isClick = !item.isClick;
          if (item.isClick) {
            this.deleteId.push(id);
          } else {
            this.deleteId.splice(this.deleteId.indexOf(id), 1);
          }
        }
      });
    } else if (type === 1) {
      this.yesterdayList.forEach((item) => {
        if (item.mid === id) {
          item.isClick = !item.isClick;
          if (item.isClick) {
            this.deleteId.push(id);
          } else {
            this.deleteId.splice(this.deleteId.indexOf(id), 1);
          }
        }
      });

    } else if (type === 2) {
      this.beforeList.forEach((item) => {
        if (item.mid === id) {
          item.isClick = !item.isClick;
          if (item.isClick) {
            this.deleteId.push(id);
          } else {
            this.deleteId.splice(this.deleteId.indexOf(id), 1);
          }
        }
      });
    }
  }

  // 删除
  public delete(): void {
    if (this.deleteId.length !== 0) {
      const confirmCfg = new ConfirmConfig('是否确定要删除？');
      this.modalService.confirm(confirmCfg).then((result) => {
        if (result.status === 'approved') {
          this.openToastrService.openToast('top-center', 'success', '成功', '删除成功！');
        }
      }).catch(() => {
      });
    } else {
      this.openToastrService.openToast('top-center', 'warning', '提示', '请选择需要删除的消息！');
    }
  }

  // 得到发送人的boxid
  public getMsg(id: number, type): void {
    // type: 0-今天; 1-昨天; 2-更早
    if (type === 0) {
      this.todayList.forEach((item) => {
        if (item.mid === id) {
          this.msgInfo['boxid'] = item['from_uid'];
          this.name = item['from_username'];
        }
      });
    } else if (type === 1) {
      this.yesterdayList.forEach((item) => {
        if (item.mid === id) {
          this.msgInfo['boxid'] = item['from_uid'];
          this.name = item['from_username'];
        }
      });

    } else if (type === 2) {
      this.beforeList.forEach((item) => {
        if (item.mid === id) {
          this.msgInfo['boxid'] = item['from_uid'];
          this.name = item['from_username'];
        }
      });
    }
  }

  // 分页
  public onPage(index): void {
    this.page.index = index;
  }
}

