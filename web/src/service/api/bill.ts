import http from '@/service/http'
import * as T from './type'

const billApi: T.BillApi = {
    add(params:T.BillAddParams){
        return http.post('/bill/add', params)
    },
    get(params:T.BillGetParams){
        return http.get('/bill/detail',params)
    },
    del(params:T.BillDelParams){
        return http.post('/bill/delete',params)
    },
    update(params:T.BillUpdateParams){
        return http.post('/bill/update',params)
    }
}

export default billApi
