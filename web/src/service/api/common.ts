import http from '@/service/http'
import * as T from './type'

const commonApi: T.CommonApi = {
    upload(file:T.FileParams){
        return http.upload('/common/upload',file)
    },
}

export default commonApi
