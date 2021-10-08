# vue-srr

vue-srr 相关实现，理论学习

## 服务端渲染 ssr

- 浏览器里进行渲染，服务端渲染，在服务端将对应的数据请求完，在后端拼接好也页面，返回给前端
- 客户端渲染不利于 seo 优化，服务端渲染的结果可以被浏览器抓取到
- ssr 的缺陷就是占用大量的 cpu 和内存
- 客户端渲染可能会出现白屏，通过 ssr，可以减少白屏事件
- Api 不能用，只支持 beforeCreate created 等生命周期，因为 dom 概念

## 安装依赖

1. npm install vue vue-router vue-server-renderer(vue 服务端渲染插件) --save
2. npm install koa koa-router koa-static

## 参考文档

[ssr](https://ssr.vuejs.org/zh/guide/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF)

## 使用 webpack 的源码结构

- webpack(核心打包使用)、webpack-cli(解析命令行参数使用)
- webpack-dev-server 开发更新
- babel-loader es6 语法支持,babel 和 webpack 的桥梁。@babel/core(核心模块)、@babel/preset-env(高级语法转化->es5)
- style-loader 不支持 ssr, vue-style-loader(vue 中解析样式，插入到页面中) css-loader
- vue-loader、vue-template-compiler,将模板转化成 render 函数
- html-webpack-plugin
- webpack-merge

## 打包两份的区别和原因

1. 客户端打包出来的是 js ，客户端代码，正常开发流程
2. 服务端渲染使用 - 服务端打包渲染出来的是一个字符串，字符串返回给客户端是 html 字符串，字符串不具备功能，所以我们需要将客户端打包好的 js 挂载到这个 html 中，就具备了 js 的逻辑。
