<!--
 * @Author: 徐德松 lingxuesonga@163.com
 * @Date: 2023-02-24 09:33:15
 * @LastEditors: 徐德松 lingxuesonga@163.com
 * @LastEditTime: 2023-02-24 09:45:53
 * @FilePath: \data-authority-1\src\App.vue
 * @Description: 
-->
<template>
  <a-config-provider :getPopupContainer="getPopupContainer" :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
  setup() {
    const store = useStore();
    // 获取token 和个人信息
    store.dispatch("user/getInfo");
    const getPopupContainer = (el: any, dialogContext: any) => {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    };
    // console.log("--11--__APP_ENV__-", GLOBAL_CONFIG?.VITE_ORG_AUTH_URL);
    console.log("--11--__APP_ENV__-", GLOBAL_CONFIG);
    //@ts-ignore
    console.log(import.meta?.env?.VITE_ORG_AUTH_URL); // 123
    return { getPopupContainer, zhCN };
  },
});
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f7fa;
}
</style>
