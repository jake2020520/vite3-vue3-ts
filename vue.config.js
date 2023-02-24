const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const APP_NAME = require("./package.json").name;
const vueConfigDefine = require("./vueConfigDefine");
/*
 * dev 为开发环境 test 为测试环境  prod 为生产环境
 * 三个环境对应 接口baseURL 配置
 */
function getPublicPath() {
  if (process.env.NODE_ENV === "development") {
    return "/";
  } else {
    return "/data/";
  }
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 全局变量的注入
    config.plugin("define").tap((args) => {
      console.log("--11--__APP_ENV__-", process.env);
      args[0].GLOBAL_CONFIG = JSON.stringify(process.env);
      return args;
    });
    // 微应用打包之后 css 中的字体文件和图片加载 404

    // 修改output
    config.output.library(`${APP_NAME}-[name]`).libraryTarget("umd");
  },
  configureWebpack: {
    resolve: {
      extensions: [".vue", ".ts", ".tsx", ".js", ".mjs"],
    },
    devtool: "source-map",
    output: {
      //添加 output 配置
      library: `${APP_NAME}-[name]`, //name 推荐和namespace保持一致,修改package.json name 为 命名空间
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${APP_NAME}`,// webpack5 已经去掉这个，根据package.name自动生成唯一
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/common.less")],
      //./src/assets/common.less 需要自己新建，作为全局样式变量表
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#3471FF",
          },
        },
      },
    },
  },

  devServer: {
    // 设置主机地址
    host: "dev.hai.net",
    // 设置默认端口
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: "h.hai.net", //  新增该配置项
    // 设置代理 用nginx 配置了，这里就不用配置了
    proxy: {
      // "/org-center/api": {
      //   // 目标 API 地址
      //   target: "http://org-center.qd-aliyun-test-internal.haier.net",
      //   // 将主机标头的原点更改为目标URL
      //   changeOrigin: true,
      // },
      // "/v1/cph4/user": {
      //   // 目标 API 地址
      //   target: "http://n-dev.haier.net",
      //   // 将主机标头的原点更改为目标URL
      //   changeOrigin: true,
      // },
    },
  },
  publicPath: getPublicPath(),
  outputDir: `dist${getPublicPath()}`,
  lintOnSave: false,
});
