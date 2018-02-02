import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


@Injectable()
export class MailService {
    constructor(private http: Http) {
    }

  mail(): Observable<any> {
    return this.http
      .get('../../assets/data/mail.json')
      .map((response: Response) => {
        let data = response.json();
        return data;
      });
  }
}
