import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../shared/base_service/auth.service';
import {OpenToastrService} from '../../shared/service/open-toastr.service';

@Component({
  selector: 'app-account-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(protected router: Router, protected authService: AuthService, protected openToastrService: OpenToastrService) {
  }

  ngOnInit() {
    this.authService.SignOut();
    this.router.navigate(['/account/login']);

    if (!this.authService.IsAuthenticated) {
      setTimeout(() => {
        this.openToastrService.openToast( 'top-center', 'success', '注销成功', '您已成功注销用户');
        this.router.navigate(['/account/login']);
      });
    } else {
      this.openToastrService.openToast('top-center', 'error', '注销失败', '您未正常下线！');
    }
  }
}

