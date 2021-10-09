import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () => {
  let store = new Vuex.Store({
    state: {
      name: '',
    },
    mutations: {
      changeName(state, data) {
        state.name = '11111';
      },
    },
    actions: {
      changeName({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('changeName');
            resolve();
          }, 5000);
        });
      },
    },
  });
  // 服务端没有window属性，只有客户端才具备window属性
  // 如果浏览器执行的时候，需要将服务器设置的最新状态替换掉客户端的状态
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__); // 替换store
  }
  return store;
};
