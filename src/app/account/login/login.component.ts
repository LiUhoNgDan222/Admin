import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/base_service/auth.service';
import { OpenToastrService } from '../../shared/service/open-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [OpenToastrService]
})
export class LoginComponent implements OnInit {

  protected username: string = '';
  protected password: string = '';
  protected validate: string = '';
  protected user: any;
  constructor(protected router: Router,
              protected authService: AuthService,
              protected openToastrService: OpenToastrService) {
  }

  ngOnInit() {

  }

  protected doLogin(): void {
    // console.log(this.username);
    // console.log(this.password);

    // 将用户信息保存
    this.authService.Authenticate(this.username, 1342423, 'sdfsdgvsdgv', '64782365225r2fger');
    // 跳转到首页
    this.router.navigate(['/']);

  }

}
