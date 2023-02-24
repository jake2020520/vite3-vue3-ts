<template>
  <page-view>
    <template #left>
      <div class="data-wrap"></div>
    </template>
    <template #right>
      <div class="data-wrap"></div>
    </template>
  </page-view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { debounce, map as lodashMap } from "lodash";

import PageView from "@/components/PageView/index.vue";
</script>

<style lang="less" scoped>
:deep(.page-layout-left) {
  width: 320px !important;
}

.left-content {
  background: #fff;
  width: 280px;
  // padding: 20px;
  .scrollbar-style();

  .header-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
      color: #1d2129;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .ant-alert-with-description {
    padding-left: 12px;
    margin-bottom: 20px;
    height: 32px;
    line-height: 32px;
    display: flex;
    align-items: center;
  }

  .spin-wrap {
    // text-align: center;
    border-radius: 4px;
    margin-top: 20px;
  }
}
.detail {
  flex: 1;
  margin-left: 1px;
  // background: #fff;
}
</style>
