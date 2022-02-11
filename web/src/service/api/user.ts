import http from '@/service/http'
import * as T from './type'

const billApi: T.UserApi = {
    info(){
        return http.get('/user/info')
    },
}

export default billApi
