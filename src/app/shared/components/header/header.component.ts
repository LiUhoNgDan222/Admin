import {Http} from '@angular/http';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthService} from '../../base_service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  protected isCollapsed: boolean = true;

  protected username: string = '';

  constructor(protected authService: AuthService, protected http: Http) {
  }

  ngOnInit() {
    var account = this.authService.GetAccount();
    {
      this.username = account.username;
    }
  }

  protected ToggleNavbar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }

  data() {
    console.log("发送请求");
    this.http.post('http://192.168.1.130:911/shop/login','')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }
  recharge(){
    alert("账户充值！");
  }
  cacheClear(){
    if(confirm("您确定要清除缓存吗？")){
      console.log("清除缓存");
    }else{
      console.log("取消操作");
    }
  }
}
