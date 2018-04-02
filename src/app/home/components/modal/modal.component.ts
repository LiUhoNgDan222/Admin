import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../../shared/components/modal/modal.service';
import {ConfirmConfig} from '../../../shared/components/modal/modal-model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [ModalService]
})
export class ModalComponent implements OnInit {

  constructor(protected modalService: ModalService) {
  }

  ngOnInit() {
  }

  public open(): void {
    const confirmCfg = new ConfirmConfig('Are you sure you want to delete the user?');
    this.modalService.confirm(confirmCfg).then((result) => {
      if (result.status === 'approved') {
        // success
      }
    }).catch(() => {
      // fail
    });
  }
}

