'use strict';

const Service = require('egg').Service
const moment = require("moment")


class userService extends Service {
    // 查询用户是否存在
    async getUserByUsername(username) {
        const { app } = this
        try {
            const result = await app.mysql.get('user',{username})
            return result
        } catch (error) {
            return null
        }
    }
    // 用户注册
    async register(data) {
        const { app } = this
        try {
            data.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
            const result = await app.mysql.insert('user',data)
            if(result.affectedRows === 1){
                return true
            }else{
                return null
            }
        } catch (error) {
            return null
        }
    }
    // 根据ID获取用户信息
    async getUserById(user_id) {
        const { app } = this
        try {
            // get查询到的是单个对象，select则可以定制查询条件等，参考官方文档
            const result = await app.mysql.select('user',{
                // 查询条件
                where:{id:user_id},
                //查询字段
                columns: ['id','username','sex','signature','avatar','ctime'],
                orders: [['id','desc']]
            })
            result[0].ctime = moment(result[0].ctime).format('YYYY-MM-DD HH:mm:ss')
            return result[0]
        } catch (error) {
            return null
        }
    }

    // 修改用户个人信息
    async updateUser(data) {
        const { app } = this
        try {
           const result = await app.mysql.update('user',{
               ...data
           },{
               id:data.id
           })
           if(result.affectedRows === 1){
               return result
           }else{
               return null
           }
        } catch (error) {
            return null
        }
    }
}

module.exports = userService