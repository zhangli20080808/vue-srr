import { createApp } from './app';

// 注意：服务端渲染要求打包后的结果 需要返回一个函数
// 服务端后续会调用这个函数传递一些参数到这个函数中
export default (context) => {
  console.log(12);
  const { app } = createApp();
  return app;
};
