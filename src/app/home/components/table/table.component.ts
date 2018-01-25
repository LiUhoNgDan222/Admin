import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TableService} from '../../../shared/service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  @ViewChild('template_type') protected template_type: TemplateRef<any>;
  @ViewChild('template_status') protected template_status: TemplateRef<any>;
  @ViewChild('template_op') protected template_op: TemplateRef<any>;

  public date: any = {}; // 日期

  // 总的数据
  public list_total: any[] = [];
  // 每一页的数据
  public list_rows: any[] = [];
  public list_columns: any[] = [];

  public list_loading: boolean = false;
  public list_count: number = 0;
  public list_page = {index: 0, count: 11};

  constructor(protected tableService: TableService) {
  }

  ngOnInit() {
    this.list_columns = [
      {prop: 'username', name: '用户名', sortable: true, width: 80},
      {prop: 'type', name: '类型', cellTemplate: this.template_type, sortable: false, width: 80},
      {prop: 'relationsSup', name: '上级关系', sortable: true, width: 100},
      {prop: 'available', name: '可用金额', sortable: true, width: 100},
      {prop: 'rebate', name: '返点', sortable: true, width: 100},
      {prop: 'status', name: '状态', cellTemplate: this.template_status, sortable: false, width: 80},
      {prop: 'lastLogin', name: '最后登录', sortable: true, width: 140},
      {prop: 'registerIp', name: '注册IP', sortable: true, width: 120},
      {prop: 'remarks', name: '备注', sortable: true, width: 100},
      {name: '操作', cellTemplate: this.template_op, sortable: false, width: 280}
    ];

    this.getList();

  }

  protected getList(): void {
    this.list_loading = true;
    this.tableService.UserList().subscribe((res) => {
      this.list_total = res;
      this.list_rows = [];
      this.list_count = res.length;
      const start = this.list_page.count * this.list_page.index;
      const end = Math.min((start + this.list_page.count), this.list_count);
      for (let i = start; i < end; i++) {
        this.list_rows.push(this.list_total[i]);
      }
      setTimeout(() => {
        this.list_loading = false;
      }, 1500);
    }, (error) => {
      console.log(error);
    });
  }

  // 分页
  public onPage(event): void {
    // event:{count: 34, pageSize: 11, limit: 11, offset: 1}
    this.list_rows = [];
    const start = event.pageSize * event.offset;
    const end = Math.min((start + event.pageSize), event.count);
    this.list_page = {index: event.offset, count: event.limit};
    for (let i = start; i < end; i++) {
      const Obj = this.list_total[i];
      this.list_rows.push(Obj);
    }
  }
}

