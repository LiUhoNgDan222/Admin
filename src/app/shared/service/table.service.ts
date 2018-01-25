import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


@Injectable()
export class TableService {
    constructor(private http: Http) {
    }

  UserList(): Observable<any> {
    return this.http
      .get('../../assets/data/user-list.json')
      .map((response: Response) => {
        let data = response.json();
        return data;
      });
  }
}
