'use strict';

const Controller = require('egg').Controller;

class baseController extends Controller {
    /**
     * 
     * @param {*} type success login error 
     * @param {*} msg  自定义提示信息
     * @param {*} data 自定义返回参数
     * @returns 
     */
    msgConfig(type, msg = '', data = null) {
        switch (type) {
            case 'success':
                return {
                    msg: msg ? msg : 'success',
                    code: 1,
                    data
                }
            case 'login':
                return {
                    msg: msg ? msg : '请先进行登录',
                    code: -1,
                    data
                }
            default:
                return {
                    msg: msg ? msg : 'error',
                    code: 0,
                    data
                }
        }

    }
}

module.exports = baseController;
