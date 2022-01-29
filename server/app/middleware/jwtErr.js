'use strict'

module.exports = (secret) => {
    return async function jwtErr(ctx,next){
        // 默认跟前端约定好的token是携带在header上的，字段为authorization
        const token = ctx.request.header.authorization
        if(token != 'null' && token){
            try {
                const decode = ctx.app.jwt.verify(token,secret);
                if(decode && decode.id){
                    await next()
                }else{
                    ctx.body = {
                        code: -1,
                        msg: 'token已过期请重新登录',
                        data: null
                    }
                    return
                }
            } catch (error) {
                ctx.body = {
                    code: -1,
                    msg: 'token已过期请重新登录',
                    data: null
                }
                return
            }
        }else{
            ctx.body = {
                code: -1,
                msg: 'token不存在',
                data: null
            }
            return
        }
    }
}