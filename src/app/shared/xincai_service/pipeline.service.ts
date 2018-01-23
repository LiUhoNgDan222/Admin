import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import { Http, Response } from '@angular/http';

/** 号码预设服务 */
@Injectable()
export class PipelineService {
    constructor(private appApiService: AppApiService, private http: Http) {
    }

  getData(): Observable<any> {
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
      .get('../../assets/data/no-preset.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'PresentRecordServer error'));
}
}
