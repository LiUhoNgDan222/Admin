import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppApiService } from '../base_service/app-api.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Response } from '@angular/http';

/** 分红管理服务 */
@Injectable()
export class DividendService {
    constructor(private appApiService: AppApiService, private http: Http) {
    }

  getData() {
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
      .catch((error: any) => Observable.throw(error || 'DividendService error'));
}
}
