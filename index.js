//路由注入到服务器中
const server =require('./server');
const router =require('./router');
server.start(router.route);