'use strict';

const Service = require('egg').Service

class TestService extends Service {
    async add() {
        const { ctx, app } = this
        const data = ctx.request.body
        try {
            const result = await app.mysql.insert('list', data)
            return result
        } catch (error) {
            return null
        }
    }
    async delete() {
        const { ctx, app } = this
        const { id } = ctx.request.body
        try {
            const result = await app.mysql.delete('list', {id})
            return result
        } catch (error) {
            return null
        }
    }
    async update() {
        const { ctx, app } = this
        const data = ctx.request.body
        try {
            const result = await app.mysql.update('list', data)
            return result
        } catch (error) {
            return null
        }
    }
    async find() {
        const { ctx, app } = this
        const data = ctx.request.body
        try {
            const result = await app.mysql.select('list', {
                limit: data.limit*1,
                offset:(data.page*1 - 1) * data.limit
            })
            return result
        } catch (error) {
            return null
        }
    }
}

module.exports = TestService