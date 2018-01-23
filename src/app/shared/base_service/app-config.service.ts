import { Injectable } from '@angular/core';

/** 保存全局配置的服务 */
@Injectable()
export class AppConfigService {
     /** 当前使用的语言，例如"en-US" */
    protected language: string;
    /** 当前使用的语言在本地储存的key */
    protected languageKey: string;
    /** 默认使用的语言 */
    protected defaultLanguage: string;
    /** 当前会话Id */
    protected sessionId: string;
    /** 会话Id储存在本地储存的key */
    protected sessionIdKey: string;
    constructor() {
        this.language = 'zh-cn';
        this.sessionIdKey = 'retail-SessionId';
     }

     /** 获取当前使用的语言 */
    getLanguage(): string {
        if (!this.language) {
            this.language = localStorage.getItem(this.languageKey) || this.defaultLanguage;
        }
        return this.language;
    }

     /** 设置当前使用的语言 */
    setLanguage(language: string) {
        this.language = language;
        localStorage.setItem(this.languageKey, language);
    }

      // 获取当前会话Id
    getSessionId(): string {
        if (!this.sessionId) {
            this.sessionId = localStorage.getItem(this.sessionIdKey);
        }
        return this.sessionId;
    }

     // 设置当前会话Id
    setSessionId(sessionId: string): void {
        this.sessionId = sessionId;
        localStorage.setItem(this.sessionIdKey, sessionId);
    }
}
