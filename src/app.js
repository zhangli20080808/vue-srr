/**
 * 服务端渲染需要一个实例
 * 假如只有一个vm实例，每一个客户端访问，都要有一个全新的实例
 * app 包装createApp核心作用 ，是因为客户端和服务端需要共享这个vue实例
 * el: 客户端需要，服务端不需要
 *
 */
import Vue from 'vue';
import App from './App.vue';

// 导出一个工厂函数，用于创建新的 每次服务端渲染的时候，都通过函数返回的实例来渲染
// 应用程序、router 和 store 实例
export function createApp() {
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: (h) => h(App),
  });
  return { app };
}