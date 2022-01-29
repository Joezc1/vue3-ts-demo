export interface LoginParams {
    username: string | number
    password: string | number
}
export interface LoginApi {
    login: (params: LoginParams)=> Promise<any>
}