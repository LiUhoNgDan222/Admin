import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { AppApiService } from '../base_service/app-api.service';
// import { Md5 } from 'ts-md5/dist/md5';
import {Http, Response} from '@angular/http';

/** 客户关系管理服务 */
@Injectable()
export class CustomerRelationService {
  constructor(private http: Http) {
  }

  getCustomerRelationData(): Observable<any> {
    return this.http
      .get('../../assets/data/customer-relation.json')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: any) => Observable.throw(error || 'CustomerRelationServer error'));
  }
}
