import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 兑换管理服务 */
@Injectable()
export class LuckTurntableService {
  constructor(private http: Http) {
  }

  getLuckeggSettingData(): Observable<any> {
    return this.http
      .get('../../assets/data/exchange.json')
      .map((response: Response) => {
        const data = response.json()['exchangeManager'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'ExchangeManagerService error'));
  }

  getLuckeggRecordData(): Observable<any> {
    return this.http
      .get('../../assets/data/exchange.json')
      .map((response: Response) => {
        const data = response.json()['exchangeRecord'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'ExchangeRecordService error'));
  }
}
