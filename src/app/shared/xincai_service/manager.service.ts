import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 号码预设服务 */
@Injectable()
export class ManagerService {
  constructor(private http: Http) {
  }

  getData(): Observable<any> {
    return this.http
      .get('../../assets/data/manager-list.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'ManagerService error'));
  }

  getOperationLogData(): Observable<any> {
    return this.http
      .get('../../assets/data/operation-log.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'OperationLogService error'));
  }
}
