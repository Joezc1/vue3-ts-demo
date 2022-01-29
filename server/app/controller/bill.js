'use strict';

const moment = require('moment')

const Controller = require("./base");

class billController extends Controller {
    // 账单添加
    async addBill() {
        const { ctx, app } = this
        //   pay_type 1支出2收入
        const { pay_type, amount, type_id, type_name, remark = '' } = ctx.request.body
        // 对入参进行判断
        if (!amount || !type_id || !type_name || !pay_type) {
            ctx.body = this.msgConfig('error', '参数错误')
            return
        }
        try {
            let user_id = null
            const token = ctx.request.header.authorization
            // 拿到token进行解密，拿到user_id以及username
            let decode = app.jwt.verify(token, app.config.jwt.secret)
            if (!decode) {
                ctx.body = this.msgConfig('error', '参数错误')
                return
            }
            user_id = decode.id
            const result = await ctx.service.bill.add({
                user_id,
                amount,
                pay_type,
                type_id,
                type_name,
                remark,
                create_date: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
                update_date: moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
            })
            if (result) {
                ctx.body = this.msgConfig("success")
                return
            } else {
                ctx.body = this.msgConfig("error")
                return
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 账单修改
    async updateBill() {
        const { ctx, app } = this
        const { id, amount, type_id, type_name, pay_type, remark = '' } = ctx.request.body
        const update_date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        const token = ctx.request.header.authorization
        const decode = app.jwt.verify(token, app.config.jwt.secret)
        try {
            if (!decode) {
                ctx.body = this.msgConfig('error')
                return
            }
            const result = await ctx.service.bill.update({
                id, user_id: decode.id, amount, type_id, type_name, pay_type, remark, update_date
            })
            if (result) {
                ctx.body = this.msgConfig('success')
            } else {
                ctx.body = this.msgConfig('error')
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 删除帐单
    async deleteBill() {
        const { ctx, app } = this
        const { id } = ctx.request.body
        const token = ctx.request.header.authorization
        const decode = app.jwt.verify(token, app.config.jwt.secret)
        try {
            if (!decode) {
                ctx.body = this.msgConfig('error')
                return
            }
            const result = await ctx.service.bill.delete({
                id, user_id: decode.id, is_delete: 1
            })
            if (result) {
                ctx.body = this.msgConfig('success')
            } else {
                ctx.body = this.msgConfig('error')
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }

    }
    // 数据分析
    async dataBill() {
        const { ctx, app } = this
        // 当月总支出
        let totalExpense = 0
        // 当月总收入
        let totalIncome = 0
        const token = ctx.request.header.authorization
        const decode = app.jwt.verify(token, app.config.jwt.secret)
        // 最后返回的结果
        let result = {}
        let billList = []
        // 2支出 1收入
        const { date, pay_type } = ctx.request.query
        try {
            if (!date) {
                ctx.body = this.msgConfig('error', '请传入日期')
                return
            }
            if (!decode) {
                ctx.body = this.msgConfig('error')
                return
            }
            const list = await ctx.service.bill.find({
                date,
                pay_type,
                user_id: decode.id
            })
            // 对当月数据按照日期进行分类
            list.forEach(item => {
                // 累计求和也可以使用reduce
                if (+item.pay_type == 1) {
                    totalExpense += item.amount * 1
                } else {
                    totalIncome += item.amount * 1
                }
                const findIndex = billList.findIndex(k=>k.type_id*1 === item.type_id*1)
                // 已经存在相同的类型，
                if(findIndex > -1){
                    billList[findIndex].number += item.amount*1 
                }else{
                    billList.push(
                        {
                            number: item.amount*1,
                            pay_type: item.pay_type,
                            type_id:item.type_id,
                            type_name:item.type_name
                        }
                    )
                }
            });
            result.total_expense = (totalExpense*1).toFixed(2)
            result.total_income = (totalIncome).toFixed(2)
            result.total_data = billList
            ctx.body = this.msgConfig('success',null,result)
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 加载帐单数据
    async getBills() {
        const { ctx, app } = this
        const { page_size, page_number, type_id, date, pay_type } = ctx.request.query
        const token = ctx.request.header.authorization
        const decode = app.jwt.verify(token, app.config.jwt.secret)
        // 最后返回的数据
        let result = {}
        // 保存处理过后的列表
        let billList = []
        // 当月总支出
        let totalExpense = 0
        // 当月总收入
        let totalIncome = 0
        // 最后返回的经过分页处理的列表
        let filterListMap = []
        try {
            if (!date) {
                ctx.body = this.msgConfig('error', '请传入日期')
                return
            }
            if (!decode) {
                ctx.body = this.msgConfig('error')
                return
            }
            const list = await ctx.service.bill.find({
                page_size,
                page_number,
                type_id,
                date,
                pay_type,
                user_id: decode.id
            })
            // 对当月数据按照日期进行分类
            list.forEach(item => {
                let tmp_date = moment(item.create_date).format('YYYY-MM-DD')
                item.create_date = new Date(item.create_date).getTime()
                item.update_date = moment(item.update_date).format('YYYY-MM-DD hh:mm:ss')
                // 累计求和也可以使用reduce
                if (+item.pay_type == 1) {
                    totalExpense += item.amount * 1
                } else {
                    totalIncome += item.amount * 1
                }
                const findIndex = billList.findIndex(k => {
                    return k.date && (k.date === tmp_date)
                })
                if (findIndex > -1) {
                    billList[findIndex].bills.push(item)
                } else {
                    billList.push({
                        date: tmp_date,
                        bills: [item]
                    })
                }
            });

            filterListMap = billList.slice((page_number - 1) * page_size, page_number * page_size)
            // 总支出
            result.totalExpense = (totalExpense).toFixed(2)
            // 总收入
            result.totalIncome = (totalIncome).toFixed(2)
            // 总页数
            result.totalPage = Math.ceil(billList.length / page_size)
            result.list = filterListMap
            ctx.body = this.msgConfig('success', null, result)

        } catch (error) {
            ctx.body = this.msgConfig('error')
        }

    }

    // 加载帐单数据
    async typeList() {
        const { ctx, app } = this
        const { id } = ctx.request.body
        try {
            const result = await ctx.service.bill.typeList()
            if (result) {
                ctx.body = this.msgConfig('success',null,{list:result})
            } else {
                ctx.body = this.msgConfig('error')
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 查询单条账单信息
    async findOne() {
        const { ctx, app } = this
        const { id } = ctx.request.query
        try {
            const result = await ctx.service.bill.findOne(id)
            result.create_date = new Date(result.create_date).getTime().toString()
            result.date =  result.create_date 
            result.amount = result.amount.toFixed(2)
            result.amount = result.amount.toString()
            if (result) {
                ctx.body = this.msgConfig('success',null,result)
            } else {
                ctx.body = this.msgConfig('error')
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
}

module.exports = billController;
