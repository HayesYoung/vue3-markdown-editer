import Markdown from "./src/index.vue";

const componentsPool = [Markdown];

export default {
  // app 是 root 的 实例
  // options 配置
  install(app, _options) {
    console.log(_options);
    // 将组件注册到 app 的全局实例上
    // 用 if 来判断按需加载
    componentsPool.map((componentsPool) => {
      app.component(componentsPool.name, componentsPool);
    });
  },
};
