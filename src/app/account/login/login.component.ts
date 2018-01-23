import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/base_service/auth.service';
import { AccountService } from '../../shared/xincai_service/account.service';
import { OpenToastrService } from '../../shared/xincai_service/open-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService, OpenToastrService]
})
export class LoginComponent implements OnInit {

  protected username: string = '';
  protected password: string = '';
  protected validate: string = '';
  protected user: any;
  constructor(protected router: Router,
              protected authService: AuthService,
              protected accountService: AccountService,
              protected openToastrService: OpenToastrService) {
  }

  ngOnInit() {

  }

  protected doLogin(): void {
    console.log(this.username);
    console.log(this.password);


    // 将用户信息保存
    this.authService.Authenticate(this.username, 1342423, 'sdfsdgvsdgv', '64782365225r2fger');
    // 跳转到首页
    this.router.navigate(['/']);

    // this.user = {'LoginName': this.username, 'Password': this.password};
    // this.accountService.ManagerLogin(this.user).subscribe(res => {
    //   console.log(res);
    //   if (res.status === 200) {
    //       // 转化为JSON
    //       res = JSON.parse(res._body);
    //       if (res.Message === '登录成功') {
    //         // 弹出提示框
    //         this.openToastrService.openToast('success', '登录成功', res.Message);
    //         // 将用户信息保存
    //         this.authService.Authenticate(this.username, res.Value.uid, res.Value.refresh_token, res.Value.token);
    //         // 跳转到首页
    //         this.router.navigate(['/']);
    //       }else {
    //         this.openToastrService.openToast('error', '登录失败', res.Message);
    //       }
    //   }
    // }, (error) => {
    //   console.log(error);
    // });

  }

}
