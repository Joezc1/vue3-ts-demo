'use strict';

const Service = require('egg').Service

class billService extends Service {
    async find(data) {
        const { ctx, app } = this
        // type_id 账单类型 date 账单日期 格式yyyy-mm 精确到月份 pay_type 2支出 1收入
        const { type_id = '', date, pay_type, user_id } = data
        try {
            let where = `user_id = ${user_id} and is_delete = 0 and date_format(create_date,"%Y-%m") = "${date}"`
            if (pay_type) {
                where = where + ` and pay_type = ${pay_type}`
            }
            if (type_id) {
                where = where + ` and type_id = ${type_id}`
            }
            // 查询字段 
            const columns = 'id, pay_type, amount, create_date, type_id, type_name, user_id, remark, update_date'
            const sql = `select ${columns} from bill where ${where} ORDER BY create_date desc`
            
            const result = await app.mysql.query(sql)
            return result
        } catch (error) {
            return null
        }
    }
    async add(data) {
        const { ctx, app } = this
        try {
            const result = await app.mysql.insert('bill', data)
            if (result.affectedRows === 1) {
                return true
            } else {
                return null
            }
        } catch (error) {
            return null
        }
    }
    async update(data) {
        const { app } = this
        const { id, user_id } = data
        try {
            const result = await app.mysql.update('bill', data, {
                where: {
                    id,
                    user_id
                }
            })
            if (result.affectedRows === 1) {
                return true
            } else {
                return null
            }
        } catch (error) {
            return null
        }
    }
    async delete(data) {
        const { app } = this
        const { id, user_id } = data
        try {
            // 进行账单软删除
            const result = await app.mysql.update('bill', data, {
                where: {
                    id,
                    user_id
                }
            })
            if (result.affectedRows === 1) {
                return true
            } else {
                return null
            }
        } catch (error) {
            return null
        }
    }
    async typeList() {
        const { app } = this
        try {
            // 进行账单软删除
            const result = await app.mysql.select('type')
            return result
        } catch (error) {
            console.log("error",error);
            return null
        }
    }
    // 查询单条账单
    async findOne(id) {
        const { app } = this
        try {
            const result = await app.mysql.get('bill',{
                id
            })
            return result
        } catch (error) {
            console.log("error",error);
            return null
        }
    }
    
}

module.exports = billService