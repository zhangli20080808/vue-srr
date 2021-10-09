import { createApp } from './app';
// 注意：服务端渲染要求打包后的结果 需要返回一个函数
// 服务端后续会调用这个函数传递一些参数到这个函数中
export default (context) => {
  console.log(context, 'context');
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    // 设置服务器端 router 的位置
    router.push(context.url || '/'); // 渲染时，先让路由跳转到客户请求的路径

    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      console.log(matchedComponents.length);
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }
      // matchedComponents是当前匹配到的路由，这个组件里面可能会写 asyncData 方法
      Promise.all(
        matchedComponents.map((component) => {
          if (component.asyncData) {
            // 如果组件有asyncData 执行 这里可能更改了状态，最终渲染的时候，我们希望拿到更改的状态
            return component.asyncData(store);
          }
        })
      ).then(() => {
        // 每个组件的asyncData都执行玩才渲染
        context.state = store.state; // 把将刚才在服务端调用vuex中的状态挂载到上下文中(会将状态挂到window.__initState__上)
        resolve(app); // 已经渲染完成了，把当前对应的路径的内容渲染好了
      });
      // Promise 应该 resolve 应用程序实例，以便它可以渲染
    }, reject);
  });
};
