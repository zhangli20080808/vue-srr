const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '1234';
});
app.use(router.routes()); // 路由系统

app.listen(3002, () => {
  console.log('服务启动在 3002 端口');
});
