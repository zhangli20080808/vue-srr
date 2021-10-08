# vue-srr
vue-srr相关实现，理论学习
## 服务端渲染 ssr
 * 浏览器里进行渲染，服务端渲染，在服务端将对应的数据请求完，在后端拼接好也页面，返回给前端 
 * 客户端渲染不利于seo优化，服务端渲染的结果可以被浏览器抓取到
 * ssr的缺陷就是占用大量的cpu和内存
 * 客户端渲染可能会出现白屏，通过ssr，可以减少白屏事件
 * Api不能用，只支持 beforeCreate created 等生命周期，因为dom概念

## 安装依赖
1. npm install vue vue-router vue-server-renderer(vue服务端渲染插件) --save
2. npm install koa koa-router koa-static

## 参考文档 
[ssr](https://ssr.vuejs.org/zh/guide/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF)