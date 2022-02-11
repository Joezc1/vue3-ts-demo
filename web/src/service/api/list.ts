import http from '@/service/http'
import * as T from './type'

const listApi: T.ListApi = {
    list(params:T.ListParams){
        return http.get('/bill/list', params)
    },
    typeList(){
        return http.get('/type/list')
    }
}

export default listApi
