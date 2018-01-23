import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 兑换管理服务 */
@Injectable()
export class VipConsumeService {
  constructor(private http: Http) {
  }

  getVipSettingData(): Observable<any> {
    return this.http
      .get('../../assets/data/vip_consume.json')
      .map((response: Response) => {
        const data = response.json()['vipSetting'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'VipConsumeService error'));
  }

  getLuckeggRecordData(): Observable<any> {
    return this.http
      .get('../../assets/data/exchange.json')
      .map((response: Response) => {
        const data = response.json()['exchangeRecord'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'VipConsumeService error'));
  }
}
