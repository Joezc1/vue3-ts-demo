import http from '@/service/http'
import * as T from './type'

const loginApi: T.LoginApi = {
    login(params:T.LoginParams){
        return http.post('/user/login', params)
    },
    register(params:T.LoginParams){
        return http.post('/user/register', params)
    }
}

export default loginApi
