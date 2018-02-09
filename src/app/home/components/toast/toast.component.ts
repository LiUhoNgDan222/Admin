import {Component, OnInit} from '@angular/core';
import {OpenToastrService} from '../../../shared/service/open-toastr.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(protected openToastrService: OpenToastrService) {
  }

  ngOnInit() {
  }

  public openToast(position, type): void {
    this.openToastrService.openToast(position, type, type, 'This is a ' + type + ' toast.');
  }

}

