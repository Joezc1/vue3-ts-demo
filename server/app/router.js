'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const baseURL = ''
  const { router, controller , middleware } = app;
  // 中间件
  const _jwt = middleware.jwtErr(app.config.jwt.secret)
  // 用户信息
  router.post(baseURL+'/user/register',controller.user.register)
  router.post(baseURL+'/user/login',controller.user.login)
  router.get(baseURL+'/user/info',_jwt,controller.user.getUserInfo)
  router.post(baseURL+'/user/update',_jwt,controller.user.updateUserInfo)
  // upload 上传文件相关
  router.post(baseURL+'/common/upload',controller.upload.upload)
  // bill 账单相关
  router.post(baseURL+'/bill/add',_jwt,controller.bill.addBill)
  router.post(baseURL+'/bill/update',_jwt,controller.bill.updateBill)
  router.post(baseURL+'/bill/delete',_jwt,controller.bill.deleteBill)
  router.get(baseURL+'/bill/list',_jwt,controller.bill.getBills)
  router.get(baseURL+'/bill/detail',_jwt,controller.bill.findOne)
  router.get(baseURL+'/bill/data',_jwt,controller.bill.dataBill)
  // 账单类型
  router.get(baseURL+'/type/list',_jwt,controller.bill.typeList)

  router.get(baseURL+'/proxy/bill/data',controller.test.hellow)

};
