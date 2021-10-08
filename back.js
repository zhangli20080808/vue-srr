const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const fs = require('fs');
const path = require('path');
const static = require('koa-static');
const ServerRender = require('vue-server-renderer');

// 采用字符串的方式 读成字符串
// let ServerBundle = fs.readFileSync(
//   path.resolve(__dirname, 'dist/server.bundle.js'),
//   'utf8'
// );
let ServerBundle = require('./dist/vue-ssr-server-bundle.json');
let clientManifest = require('./dist/vue-ssr-client-manifest.json');
let template = fs.readFileSync(
  path.resolve(__dirname, 'dist/server.html'),
  'utf8'
);
// 表示渲染时，我们使用自己webpack构建出来的包，并且和他说这里客户端引用的是对应的 mainfest 文件
let render = ServerRender.createBundleRenderer(ServerBundle, {
  template,
  clientManifest,
});
function renderToString(context) {
  return new Promise((resolve, reject) => {
    // 解析css必须写成回调的方式，调用renderToString的时候会去调用我们返回的bundle打包好的方法
    render.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}
router.get('/', async (ctx) => {
  const context = {
    title: 'ssr-test',
  };
  // renderToStream renderToString
  ctx.body = await renderToString(context);
});
app.use(router.routes()); // 路由系统
app.use(static(path.resolve(__dirname, 'dist')));
app.listen(3002, () => {
  console.log('服务启动在 3002 端口');
});
