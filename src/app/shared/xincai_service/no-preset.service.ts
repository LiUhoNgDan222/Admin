import { Injectable } from '@angular/core';
import { AppApiService } from '../base_service/app-api.service';
import { Http, Response } from '@angular/http';

/** 号码预设服务 */
@Injectable()
export class NoPresetService {
    constructor(private appApiService: AppApiService, private http: Http) {
    }
}
