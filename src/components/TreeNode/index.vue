<template>
  <div class="tree-wrap">
    <a-directory-tree
      :show-line="showLine"
      :show-icon="true"
      :tree-data="treeData"
      :field-names="fieldNames"
      :load-data="onLoadData"
      :loadedKeys="loadedKeys"
      @load="loadDept"
      multiple
      v-model:expandedKeys="expandedKeys"
      v-model:selectedKeys="currentSelectedKeys"
      @select="onTreeSelect"
    >
      <template #icon="{ dataRef }">
        <template v-if="isLoadData && dataRef.isLeaf">
          <FolderOpenOutlined v-if="dataRef.nodeType == NODE_TYPE.GROUP" />
          <MinusSquareOutlined v-else />
        </template>
        <template v-if="!isLoadData && dataRef?.children?.length == 0">
          <MinusSquareOutlined />
        </template>
      </template>
      <template #switcherIcon="{ expanded, dataRef, defaultIcon }">
        <template v-if="dataRef.nodeType == NODE_TYPE.GROUP">
          <FolderOpenOutlined
            v-if="dataRef.nodeType == NODE_TYPE.GROUP && expanded"
          />
          <FolderOutlined
            v-else-if="dataRef.nodeType == NODE_TYPE.GROUP && !expanded"
          />
        </template>
        <component :is="defaultIcon" v-else />
      </template>
    </a-directory-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch, PropType } from "vue";
import type { TreeProps } from "ant-design-vue";
import { useStore } from "vuex";
import { NODE_TYPE } from "@/const/enum";
import { cloneDeepWith, map as lodashMap } from "lodash";

export default defineComponent({
  components: {},
  props: {
    showLine: {
      type: Boolean,
      default: true,
    },
    // 是否支持异步数据
    isLoadData: {
      type: Boolean,
      default: true,
    },
    // 首次tree的数据
    orgTreeData: {
      type: Array,
      default: () => [{}],
    },
    // 获取更多数据的接口
    getOrgTreeNext: {
      type: Function,
      default: () => ({}),
    },
    // 选中当前节点的数据
    currentNodes: {
      type: Object as PropType<CurrentNodesType>,
      default: () => ({}),
    },
    // 自定义 替换treeNode中 title,key,children字段为treeData中对应的字段
    fieldNames: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: GeneralType, { emit }) {
    const store = useStore();
    const { isLoadData, orgTreeData, getOrgTreeNext, currentNodes } =
      toRefs(props);
    let treeData = ref<any>(orgTreeData.value);
    let loadedKeys = ref<number[]>([]);
    const expandedKeys = ref<number[]>([]);
    const currentSelectedKeys = ref<number[]>([]);
    let selectCurrentNodes: any = currentNodes;

    watch(
      () => orgTreeData.value,
      () => {
        //TODO 深度copy 避免 treeData 改变 orgTreeData,造成循环监听
        treeData.value = cloneDeepWith(orgTreeData.value);
        expandedKeys.value = [...(currentNodes.value as any).expandedKeys];
        currentSelectedKeys.value = [
          ...(currentNodes.value as any).selectedKeys,
        ];
      },
      { deep: true, immediate: true }
    );

    const onTreeSelect = (selectedKeys: number[], e: any) => {
      selectCurrentNodes.selectedKeys = selectedKeys;
      selectCurrentNodes.nodes = e.node.dataRef;
      selectCurrentNodes.e = e;
      currentSelectedKeys.value = selectedKeys;
      emit("onTreeSelect", selectCurrentNodes);
    };

    //	节点加载完毕时触发
    const loadDept = (loadedKeys: any) => {
      loadedKeys.value = loadedKeys;
    };

    // 获取更多数据的方法11
    const onLoadData: TreeProps["loadData"] = (treeNode: any) => {
      return new Promise(async (resolve) => {
        if (treeNode.dataRef.children.length > 0) {
          resolve();
          return;
        }
        setTimeout(async () => {
          const orgTreeNextData = await (getOrgTreeNext.value as any)({
            nodeId: treeNode.dataRef.id,
            nodeType: treeNode.dataRef.nodeType,
          });
          // if (orgTreeNextData.length === 0) {
          //   treeNode.dataRef.isLeaf = true;
          // }
          treeNode.dataRef.children = orgTreeNextData;
          treeData.value = [...treeData.value];
          resolve();
        }, 500);
      });
    };
    return {
      expandedKeys,
      currentSelectedKeys,
      treeData,
      onTreeSelect,
      onLoadData: isLoadData.value ? onLoadData : null,
      loadedKeys: isLoadData.value ? loadedKeys : [],
      loadDept: isLoadData.value ? loadDept : null,
      NODE_TYPE,
    };
  },
});
</script>

<style lang="less" scoped>
.tree-wrap {
  text-align: left;
  padding: 0 0 30px;
  // width: 280px;
  background: #fff;
}
:deep(.ant-tree.ant-tree-directory) {
  .ant-tree-treenode-selected {
    color: #17181a;
    &::before {
      background: rgba(79, 142, 254, 0.2);
    }
    &:hover::before {
      background: rgba(79, 142, 254, 0.2);
    }
    .ant-tree-switcher {
      color: #17181a !important;
    }
  }
  .ant-tree-treenode {
    &:hover {
      background: #f5f5f5;
    }
  }

  .ant-tree-node-content-wrapper.ant-tree-node-selected {
    color: #17181a !important;
  }
}
:deep(.ant-tree-show-line) {
  .ant-tree-switcher {
    background: transparent;
  }
  .ant-tree-switcher-noop {
    display: none;
  }
  .ant-tree-iconEle {
    margin-left: -4px;
    margin-right: 4px;
  }
}
</style>
