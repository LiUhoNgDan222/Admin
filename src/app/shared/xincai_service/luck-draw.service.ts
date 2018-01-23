import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 幸运大抽奖管理服务 */
@Injectable()
export class LuckDrawService {
  constructor(private http: Http) {
  }

  getLuckDrawListSettingData(): Observable<any> {
    return this.http
      .get('../../assets/data/luck_draw.json')
      .map((response: Response) => {
        const data = response.json()['list'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'LuckDrawService error'));
  }

  getLuckeggRecordData(): Observable<any> {
    return this.http
      .get('../../assets/data/exchange.json')
      .map((response: Response) => {
        const data = response.json()['exchangeRecord'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'LuckDrawService error'));
  }
}
