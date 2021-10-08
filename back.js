const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const fs = require('fs');
const path = require('path');

// 第 1 步：创建一个 Vue 实例
const Vue = require('vue');
const vm = new Vue({
  template: `<div>Hello World</div>`,
});
const template = fs.readFileSync(
  path.resolve(__dirname, 'template.html'),
  'utf-8'
);

// 第 2 步：创建一个 renderer 渲染器
const renderer = require('vue-server-renderer').createRenderer({
  template: template, // 创建渲染器指定模板，会将结果插入到 vue-ssr-outlet 中
});
// 第 3 步：将 Vue 实例渲染为 HTML

router.get('/', async (ctx) => {
  // renderToStream renderToString
  ctx.body = await renderer.renderToString(vm);
});
app.use(router.routes()); // 路由系统

app.listen(3002, () => {
  console.log('服务启动在 3002 端口');
});
