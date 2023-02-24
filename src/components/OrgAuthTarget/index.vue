<template>
  <a-alert type="info" show-icon>
    <template #icon
      ><exclamation-circle-filled
        style="font-size: 14px; color: #2681ff; margin-right: 9px"
    /></template>
    <template #description>
      <span style="color: #3471ff; font-size: 12px">
        <a :href="orgAuthUrl" target="_blank">申请更多组织权限 &gt;&gt;</a>
      </span>
    </template>
  </a-alert>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "orgAuthTarget",
  setup() {
    //@ts-ignore
    return { orgAuthUrl: "GLOBAL_CONFIG?.orgAuthUrl||import.meta?.env" };
  },
});
</script>

<style scoped lang="less">
.ant-alert-with-description {
  padding-left: 12px;
  margin-bottom: 20px;
  height: 32px;
  line-height: 32px;
  display: flex;
  align-items: center;
}
</style>
