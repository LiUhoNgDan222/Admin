import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 号码预设服务 */
@Injectable()
export class StatisticsService {
  constructor(private http: Http) {
  }

  getData(): Observable<any> {
    return this.http
      .get('../../assets/data/no-preset.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'StatisticsService error'));
  }

  getLotteryTest(): Observable<any> {
    return this.http
      .get('../../assets/data/lottery-test.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'StatisticsService error'));
  }
}
