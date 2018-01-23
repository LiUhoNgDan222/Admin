import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppApiService } from '../base_service/app-api.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Response } from '@angular/http';


@Injectable()
export class UserManageService {
    constructor(private appApiService: AppApiService, private http: Http) {
    }

  UserList(request: any): Observable<any> {
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
      .get('../../assets/data/user-list.json')
      .map((response: Response) => {
        let data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'TimeManageServer error'));
  }

  BankInfo(request: any): Observable<any> {
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
      .get('../../assets/data/bank-list.json')
      .map((response: Response) => {
        let data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'TimeManageServer error'));
  }

  LoginInfo(request: any): Observable<any> {
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
      .get('../../assets/data/login-info.json')
      .map((response: Response) => {
        let data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'TimeManageServer error'));
  }

  UserQuota(request: any): Observable<any> {
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
        let data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'TimeManageServer error'));
  }
}
