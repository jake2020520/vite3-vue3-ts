<template>
  <page-view :leftWidth="320">
    <template #left>
      <div class="data-wrap">左边</div>
    </template>
    <template #right>
      <div class="data-wrap">右边</div>
    </template>
  </page-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import PageView from "@/components/PageView/index.vue";
export default defineComponent({
  components: {
    PageView,
  },
  setup() {
    onMounted(() => {});

    return {};
  },
});
</script>

<style lang="less" scoped>
:deep(.page-layout-left) {
  width: 320px !important;
}

:deep(.page-layout-right) {
  z-index: 1;
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

  .spin-wrap {
    text-align: center;
    border-radius: 4px;
    margin-top: 20px;
    height: calc(100vh - 285px - @foot-height);
    .scrollbar-style();
  }

  .org-tree-node {
    // height: calc(100vh - 280px);
    .scrollbar-style();
  }
}

.detail {
  flex: 1;
  margin-left: 1px;
  // background: #fff;
}

.search-tree-node-select {
  width: 100%;
}

:deep(.ant-select-show-search) {
  width: 100% !important;
}
</style>
