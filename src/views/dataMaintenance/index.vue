<template>
  <page-view :leftWidth="320">
    <template #left>
      <div class="data-list">
        <div class="list-header">
          <h3>数据</h3>
          <a-button type="link" size="small" @click="handleAdd">
            <PlusOutlined />新增
          </a-button>
        </div>
        <div class="list-content">
          <a-tabs v-model:activeKey="activeKey" @change="changTab">
            <a-tab-pane key="1" tab="tab1"> </a-tab-pane>
            <a-tab-pane key="2" tab="tab2" force-render> </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </template>
    <template #right>
      <div class="data-content"></div>
    </template>
  </page-view>
</template>
<script lang="ts" setup>
import PageView from "@/components/PageView/index.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
let activeKey = ref<string>("1");

// 新增组织、维度
const handleAdd = () => {};

// 切换tab标签
const changTab = (key: string) => {
  if (key == "1") {
    // getOrgList();
  } else {
    // getDimensionList();
  }
};

onMounted(() => {});
</script>

<style lang="less" scoped>
.data-list {
  width: 280px;

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 14px;
      font-weight: bold;
      margin: 0;
    }
  }
}

:deep(.ant-btn-link) {
  padding: 0;
}
</style>
