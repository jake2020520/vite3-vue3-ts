/*
 * @Author: 徐德松 lingxuesonga@163.com
 * @Date: 2023-02-24 09:33:15
 * @LastEditors: 徐德松 lingxuesonga@163.com
 * @LastEditTime: 2023-02-24 09:46:36
 * @FilePath: \data-authority-1\vite.config.ts
 * @Description:
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");
const vueConfigDefine = require("./vueConfigDefine");
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 两种全局变量注入的方式 1
  const env: any = loadEnv(mode, process.cwd(), "");
  console.log("----11-mode--", mode, env.VITE_BASE_URL);
  return {
    plugins: [vue(), require("postcss-preset-env")],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    define: {
        // 两种全局变量注入的方式 2
      GLOBAL_CONFIG: vueConfigDefine[mode],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve("src/common.less")}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    server: {
      // 设置主机地址
      host: "dev.haier.net",
      port: 8080,
      proxy: {
        "/org-center/api": {
          // 目标 API 地址
          target: "http://org-center.qd-aliyun-test-internal.haier.net",
          // 将主机标头的原点更改为目标URL
          changeOrigin: true,
        },
        "/v1/cph4": {
          // 目标 API 地址
          target: "http://n-dev.haier.net",
          // 将主机标头的原点更改为目标URL
          changeOrigin: true,
        },
      },
    },
  };
});
