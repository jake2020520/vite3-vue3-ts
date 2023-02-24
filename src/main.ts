import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "./router";
import store from "./store";
import Antd from "./plugins/ant";
import "./public-path"; //引入上面的文件
import "ant-design-vue/dist/antd.less";
// 导入图标库
import * as Icons from "@/utils/Icon";
import "./common.less";

let router = null;
let app: any = null;
function render(props: any) {
  console.log("render： ", props);
  const { container } = props;
  app = createApp(App);
  const path = !(window as any).__POWERED_BY_QIANKUN__
    ? "/data/"
    : "/app/data/";
  router = createRouter({
    history: createWebHistory(path),
    routes,
  });
  // 开始使用全局图标
  const icons: any = Icons;
  for (const i in icons) {
    // 循环注册组件
    app.component(i, icons[i]);
  }
  app
    .use(store)
    .use(router)
    .use(Antd)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  console.log("父项目传参：mount： ", props);
  store && store.commit("user/setUseInfo", props.userInfo);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("unmount");
  app && app?.unmount();
}
