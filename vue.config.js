const path = require("path");
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  pages: {
    index: {
      entry: "example/main.js",
      // template: "public/index.html", // html的位置  
      // filename: "index.html", // 打包后的名字
    },
  },

  outputDir: "lib", // 打包好存放地址


  configureWebpack: {
    // 别名
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("packages"),
        assets: resolve("examples/assets"),
        views: resolve("examples/views"),
      },
    },
  },

  productionSourceMap: false,

  devServer: {
    port: 8091, //固定端口
    hot: true, //开启热更新
    open: "Google Chrome", //固定打开浏览器
  },

  // webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });

    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
  },
};
