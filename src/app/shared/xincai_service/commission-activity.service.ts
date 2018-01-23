import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppApiService } from '../base_service/app-api.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Response } from '@angular/http';

/** 佣金管理服务 */
@Injectable()
export class CommissionActivityService {
    constructor(private appApiService: AppApiService, private http: Http) {
    }

  CommissionRecord(type: any) {
    // const sign = 'xingcai200100100' + JSON.stringify(request).toString();
    // return this.appApiService.call<any>('../../../assets/data/no-preset.json',
    // {
    //   'SourceCode': 100,
    //   'Action': 100,
    //   'Param': JSON.stringify(request),
    //   'MsgId': '200',
    //   'Sign': Md5.hashStr(sign).toString().toUpperCase()
    // });

    return this.http
      .get('')
      .map((response: Response) => {
        return  response.json();
      })
      .catch((error: any) => Observable.throw(error || 'CommissionsServer error'));
}
}
