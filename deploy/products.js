
/*
 *读取env环境变量
 */
const SERVER_ID = process.env.NODE_ENV === 'prod' ? 1 : 0;

/*
 *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
 */
const SERVER_LIST = [
  {
    id: 0,
    name: '前端笔记',
    domain: 'front-docs.ngto.top',// 域名
    host: '47.104.216.85',// ip
    port: 22,// 端口
    username: 'root', // 登录服务器的账号
    password: 'ngto921210@.',// 登录服务器的密码
    path: '/docker/nginx/html/front-docs'// 发布至静态服务器的项目路径
  },
  {
    id: 1,
    name: '前端笔记',
    domain: 'front-docs.ngto.top',// 域名
    host: '47.104.216.85',// ip
    port: 22,// 端口
    username: 'ngto921210@.', // 登录服务器的账号
    password: '',// 登录服务器的密码
    path: '/docker/nginx/html/front-docs'// 发布至静态服务器的项目路径
  }
];

module.exports = SERVER_LIST[SERVER_ID];

