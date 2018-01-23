import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 系统设置服务 */
@Injectable()
export class SettingService {
  constructor(private http: Http) {
  }

  getData(): Observable<any> {
    return this.http
      .get('../../assets/data/manager-list.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'SettingService error'));
  }

  getAnnounceCenterData(): Observable<any> {
    return this.http
      .get('../../assets/data/setting.json')
      .map((response: Response) => {
        const data = response.json()['announce'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'AnnounceCenterService error'));
  }

  getReceiveData(): Observable<any> {
    return this.http
      .get('../../assets/data/setting.json')
      .map((response: Response) => {
        const data = response.json()['receive'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'SettingReceiveService error'));
  }

  getLotteryData(): Observable<any> {
    return this.http
      .get('../../assets/data/setting.json')
      .map((response: Response) => {
        const data = response.json()['lottery'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'SettingLotteryService error'));
  }

  getmarkSixManageData(): Observable<any> {
    return this.http
      .get('../../assets/data/setting.json')
      .map((response: Response) => {
        const data = response.json()['markSixManage'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'MarkSixManageService error'));
  }

  getRankSettingData(): Observable<any> {
    return this.http
      .get('../../assets/data/setting.json')
      .map((response: Response) => {
        const data = response.json()['rankSetting'];
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'RankSettingService error'));
  }

}
