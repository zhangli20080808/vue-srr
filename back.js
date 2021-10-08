const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const fs = require('fs');
const path = require('path');
const static = require('koa-static');
const ServerRender = require('vue-server-renderer');

// 采用字符串的方式 读成字符串
let ServerBundle = fs.readFileSync(
  path.resolve(__dirname, 'dist/server.bundle.js'),
  'utf8'
);
let template = fs.readFileSync(
  path.resolve(__dirname, 'dist/server.html'),
  'utf8'
);
let render = ServerRender.createBundleRenderer(ServerBundle, {
  template:template,
});
router.get('/', async (ctx) => {
  // renderToStream renderToString
  ctx.body = await render.renderToString();
});
app.use(router.routes()); // 路由系统
// app.use(static(path.resolve(__dirname, 'public/server.html')));
app.listen(3002, () => {
  console.log('服务启动在 3002 端口');
});
