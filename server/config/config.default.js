/* eslint valid-jsdoc: "off" */

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635298725584_804';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload'
  };

//   // 静态资源配置
//  config.static = {
//     // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
//    prefix: '/', 
//     dir: 'app/h5', // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
//     dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
//     preload: false,
//     maxAge: 31536000, // in prod env, 0 in other envs
//     buffer: true, // in prod env, false in other envs
//   };

  // 网关配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*'], // 配置白名单
  };

  // mysql配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456', // 初始化密码，没设置的可以不写
      // 数据库名
      database: 'qaccountbook', // 我们新建的数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // jwt配置自定义解密钥匙
  config.jwt = {
    secret: 'Nick',
  };

  // 配置文件上传
  config.multipart = {
    mode: 'file'
  };

  // 跨域配置
  config.cors = {
    origin: '*', // 允许所有跨域访问
   // credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // 配置运行端口
  config.cluster = {
    listen: {
      path: '',
      port: 888,
      hostname: '0.0.0.0',
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};


