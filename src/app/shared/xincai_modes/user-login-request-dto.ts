/** 用户登录请求 */
export class UserLoginRequestDto {
    /** 用户名 */
    public Username: string;
    /** 密码 */
    public Password: string;
    /** 验证码 */
    public Validate: string;
}
