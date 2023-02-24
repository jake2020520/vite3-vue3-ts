<!--
 * @Author: 徐德松 lingxuesonga@163.com
 * @Date: 2023-02-24 09:33:10
 * @LastEditors: 徐德松 lingxuesonga@163.com
 * @LastEditTime: 2023-02-24 11:13:53
 * @FilePath: \data-authority-1\src\views\layout\index.vue
 * @Description: 
-->
<template>
  <a-layout>
    <a-layout-sider
      width="220"
      style="background: #fff"
      :trigger="null"
      collapsible
      v-if="isShowSider"
    >
      <div class="sider-title">数据测试</div>
      <a-menu
        class="layout-menu"
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="inline"
      >
        <a-menu-item
          v-for="item in breadcrumbList"
          :key="`${publicPath}${item.path}`"
          @change="changeMenu(item)"
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header" v-if="isShowSider">
        <a-breadcrumb style="margin: 12px 0" separator=">">
          <a-breadcrumb-item>数据测试</a-breadcrumb-item>
          <a-breadcrumb-item>{{ breadcrumbTitle }}</a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout-header>
      <a-layout-content
        :style="{
          background: '#F0F2F5',
          padding: '20px',
          margin: 0,
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed } from "vue";

export default defineComponent({
  components: {},
  setup() {
    let publicPath = ref<string>("/data-auth");
    let breadcrumbList = ref<Array<any>>([
      {
        path: "/dataMaintenance",
        name: "nav测试1",
      },
      {
        path: "/orgAuth",
        name: "nav测试2",
      },
      {
        path: "/dimensionAuth",
        name: "nav测试3",
      },
    ]);

    let selectKey = breadcrumbList.value[0];
    let selectedKeys = ref<string[]>([`${publicPath.value}${selectKey.path}`]);
    let breadcrumbTitle = ref<string>(selectKey.name);
    // 切换menu
    const changeMenu = (item: any) => {
      breadcrumbTitle.value = item.name;
    };
    onMounted(() => {
      let keyValue = location.pathname;
      selectedKeys.value = [keyValue];
    });
    return {
      selectedKeys,
      publicPath,
      breadcrumbList,
      breadcrumbTitle,
      changeMenu,
      isShowSider: !(window as any).__POWERED_BY_QIANKUN__,
    };
  },
});
</script>
<style lang="less" scoped>
.sider-title {
  height: 48px;
  line-height: 48px;
  padding-left: 24px;
  color: #1d2129;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: bold;
}

.header {
  background: #fff;
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
}

:deep(.ant-layout-sider-children) {
  border-right: 2px solid #dadfe6;
  height: 100vh;

  .ant-menu-inline {
    .ant-menu-vertical,
    .ant-menu-vertical-left {
      border-right: 0;
    }

    .ant-menu-item::after {
      border-right: 0;
    }

    .ant-menu-item {
      width: 100%;
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #fff;
  }

  .ant-menu-item:active {
    background: #fff;
  }
}
</style>
