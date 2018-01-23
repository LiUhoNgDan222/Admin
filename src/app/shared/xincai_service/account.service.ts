import {Injectable} from '@angular/core';
import {AppApiService, ServiceRequestCallback } from '../base_service/app-api.service';
import {Md5} from 'ts-md5/dist/md5';

/** 用户登录服务 */
@Injectable()
export class AccountService {
  constructor(private appApiService: AppApiService) {
  }

  ManagerLogin(param: any, callback: ServiceRequestCallback ) {
    return this.appApiService.call<any>('Manage-ManagerLogin',
  param, callback);
}}
