import {Component, Input, ViewEncapsulation } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmConfig} from './modal-model';

/**
 * 确认框组件
 */
@Component({
    templateUrl : './confirm.component.html',
    styleUrls: ['./confirm.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class ConfirmComponent {
    @Input() config: ConfirmConfig;

    constructor(public activeModal: NgbActiveModal) {}

    /**
     * 不同意
     */
    public  decline(): void {
       this.activeModal.dismiss({ status : 'declined' });
    }

    /**
     * 关闭
     */
    public  close(): void {
       this.activeModal.dismiss({ status : 'closed' });
    }

    /**
     * 同意
     */
    public  approve(event): void {
        this.activeModal.close({ status : 'approved' });
    }
}
