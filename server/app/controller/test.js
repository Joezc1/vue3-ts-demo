'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async add() {
    const { ctx } = this;
    try {
        const result = await ctx.service.test.add()
        ctx.body = {
            msg: result && result.affectedRows ? 'success':'error',
            code: result && result.affectedRows ? 1 : 0,
            data: null
        }
    } catch (error) {
        ctx.body = {
            msg: 'error',
            code: 0,
            data: null
        }
    }
  }
  async delete() {
    const { ctx } = this;
    try {
        const result = await ctx.service.test.delete()
        ctx.body = {
            msg: result && result.affectedRows ? 'success':'error',
            code: result && result.affectedRows ? 1 : 0,
            data: null
        }
    } catch (error) {
        ctx.body = {
            msg: 'error',
            code: 0,
            data: null
        }
    }
  }
  async update() {
    const { ctx } = this;
    try {
        const result = await ctx.service.test.update()
        ctx.body = {
            msg: result && result.affectedRows ? 'success':'error',
            code: result && result.affectedRows ? 1 : 0,
            data: null
        }
    } catch (error) {
        ctx.body = {
            msg: 'error',
            code: 0,
            data: null
        }
    }
  }

  async find() {
    const { ctx } = this;
    try {
        const result = await ctx.service.test.find()
        console.log("find",result);
        ctx.body = {
            msg: 'success',
            code: 1,
            data: result
        }
    } catch (error) {
        ctx.body = {
            msg: 'error',
            code: 0,
            data: null
        }
    }
  }

  async hellow() {
      this.ctx.body = "你好"
  }

}

module.exports = TestController;
