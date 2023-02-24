<template>
  <div>
    <a-select
      v-model:value="value"
      showSearch
      label-in-value
      placeholder="请输入组织节点名称"
      style="width: 200px"
      :field-names="fieldNames"
      :filter-option="false"
      :not-found-content="fetching ? undefined : null"
      :options="data"
      :allowClear="true"
      @change="handleChangeValue"
      @search="fetchOrgData"
    >
      <template v-if="fetching" #notFoundContent>
        <a-spin size="small" />
      </template>
    </a-select>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import type { SelectProps } from "ant-design-vue";
import { debounce } from "lodash";

export default defineComponent({
  props: {
    selectTopOrgValue: {
      type: String || Number,
      default: "",
    },
    searchOrgTreeData: {
      type: Function,
      default: () => ({}),
    },
    // 自定义 label、value、options 字段
    fieldNames: {
      type: Object,
      default: () => ({
        label: "name",
        value: "id",
        options: "datas",
      }),
    },
  },
  setup(props, { emit }) {
    const { searchOrgTreeData, selectTopOrgValue } = toRefs(props);

    const state = reactive({
      data: [],
      value: [],
      fetching: false,
    });

    watch(
      () => selectTopOrgValue.value,
      () => {
        // fetchOrgData("");
        state.data = [];
        state.value = [];
      }
    );

    const fetchOrgData = debounce(async (value) => {
      state.data = [];
      state.value = [];
      state.fetching = true;
      const dataArr = await searchOrgTreeData.value(value);
      state.data = dataArr;
      state.fetching = false;
    }, 300);

    const handleChangeValue = (value: string, option: any) => {
      emit("getSearchOrgValue", {
        ...option,
        title: option?.name,
        children: [],
      });
    };

    // 清空搜索内容
    const clearSearch = () => {
      state.data = [];
      state.value = [];
    };

    return {
      ...toRefs(state),
      fetchOrgData,
      handleChangeValue,
      clearSearch,
    };
  },
});
</script>
