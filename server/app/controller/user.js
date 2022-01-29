'use strict';

const Controller = require("./base");

class userController extends Controller {
    // 用户注册
    async register() {
        const { ctx } = this;
        const { username, password } = ctx.request.body
        try {
            if (!username || !password) {
                ctx.body = this.msgConfig('error', '请输入用户名和密码')
                return
            }
            // 检测用户名是否存在
            const userInfo = await ctx.service.user.getUserByUsername(ctx.request.body.username)
            if (userInfo) {
                ctx.body = this.msgConfig('error', '该用户已存在')
                return
            } else {
                // 进行注册
                const result = await ctx.service.user.register({ username, password })
                if (result) {
                    ctx.body = this.msgConfig('success', '注册成功')
                } else {
                    ctx.body = this.msgConfig('error')
                }
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 用户登录
    async login() {
        const { ctx, app } = this
        const { username, password } = ctx.request.body
        try {
            // 非空判断
            if (!username || !password) {
                ctx.body = this.msgConfig('error', '请填写账号和密码')
                return
            }
            // 检测用户是否已经存在
            const userInfo = await ctx.service.user.getUserByUsername(ctx.request.body.username)
            if (!userInfo) {
                ctx.body = this.msgConfig('error', '账号不存在')
                return
            }
            // 比较密码
            if (userInfo && password !== userInfo.password) {
                ctx.body = this.msgConfig('error', '账号密码不正确')
                return
            }
            // 生成token
            const token = app.jwt.sign({
                id: userInfo.id,
                username: userInfo.username,
                exp: Math.floor(Date.now() / 1000) + (1 * 60 * 60) // token 有效期为 24 小时
            }, app.config.jwt.secret)


            ctx.body = this.msgConfig('success', null, { token })
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 获取用户信息
    async getUserInfo() {
        const { ctx, app } = this
        const token = ctx.request.header.authorization
        try {
            // 通过token获取用户信息
            const decode = await app.jwt.verify(token, app.config.jwt.secret)
            // 通过解密到的用户id获取用户信息
            const userInfo = await ctx.service.user.getUserById(decode.id)
            if (userInfo && userInfo.id) {
                ctx.body = this.msgConfig('success', null, userInfo)
            } else {
                ctx.body = this.msgConfig('error')
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
    // 修改用户信息
    async updateUserInfo() {
        const { ctx, app } = this
        const data = ctx.request.body
        try {
            const result = await ctx.service.user.updateUser(data)
            if (result) {
                ctx.body = this.msgConfig('success', '修改成功')
            } else {
                ctx.body = this.msgConfig('error')
            }
        } catch (error) {
            ctx.body = this.msgConfig('error')
        }
    }
}

module.exports = userController;
