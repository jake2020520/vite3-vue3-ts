<template>
  <div>
    <div :class="{ 'normal-height': isShowMoreMark, 'show-more': isShowMore }">
      <div class="buttons-wrap" ref="buttonWrapDom">
        <div
          v-for="item in dimensionData"
          :key="item.id"
          class="button-item-wrap"
          @click="getCurrentDimension(item)"
        >
          <div
            class="dimension-button"
            :class="item.id === currentDimension.id ? 'active-button' : ''"
          >
            <div class="name">{{ item.name }}</div>
            <div class="active-mark" v-if="item.id === currentDimension.id">
              当前维度
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="more-btn" @click="showMore" v-show="isShowMoreMark">
      <a-divider v-if="!isShowMore" dashed
        ><span>展开 <down-outlined /></span
      ></a-divider>
      <a-divider dashed v-else>
        <span>收起<up-outlined /></span
      ></a-divider>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  reactive,
  toRefs,
  PropType,
} from "vue";
import { DimensionDataType } from "@/types/orgAuth";
import observeRect from "@reach/observe-rect";
import type { TreeProps } from "ant-design-vue";

export default defineComponent({
  components: {},
  props: {
    // 首次tree的数据
    dimensionData: {
      type: Array as PropType<DimensionDataType[]>,
      default: () => [{}],
    },
  },
  setup(props: GeneralType, { emit }) {
    const { dimensionData } = toRefs(props);

    let isShowMoreMark = ref<boolean>(false);
    let isShowMore = ref<boolean>(false);
    let buttonWrapDom = ref<Element>();
    let currentDimension = ref<any>({});

    watch(
      () => dimensionData.value,
      () => {
        currentDimension.value = (dimensionData.value as any)[0];
      },
      {
        deep: true,
      }
    );

    const getCurrentDimension = (item: any) => {
      currentDimension.value = item;
      emit("selectDimension", item);
    };

    const showMore = () => {
      isShowMore.value = !isShowMore.value;
    };

    const observe = () => {
      const observer = observeRect(buttonWrapDom.value as Element, (rect) => {
        if (rect.height > 64) {
          isShowMoreMark.value = true;
        } else if (rect.height <= 64) {
          isShowMoreMark.value = false;
          isShowMore.value = false;
        }
      });
      observer.observe();
    };

    onMounted(() => {
      observe();
    });
    return {
      showMore,
      isShowMore,
      getCurrentDimension,
      currentDimension,
      buttonWrapDom,
      isShowMoreMark,
    };
  },
});
</script>
<style lang="less" scoped>
.buttons-wrap {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .button-item-wrap {
    padding-right: 16px;
    margin-bottom: 16px;
  }
  .dimension-button {
    width: 90px;
    height: 48px;
    border-radius: 2px;
    text-align: center;
    font-size: 12px;
    position: relative;
    background: #f7f8fa;
    color: #4f5969;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .name{
      width: 100%;
      padding: 0 5px;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .active-button {
    display: block;
    padding-top: 8px;
    background: #3471ff;
    color: #fff;
  }
  .active-mark {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    background: linear-gradient(
      rgba(52, 113, 255, 1) 0%,
      rgba(84, 184, 255, 1) 50.834%,
      rgba(52, 113, 255, 1) 100%
    );
  }
  .more-btn {
    font-size: 12px;
  }
}
:deep(.ant-divider-with-text) {
  font-size: 12px !important;
  color: #8f959e !important;
}
.normal-height {
  height: 64px;
  overflow: hidden;
}
.show-more {
  height: auto;
  max-height: 500px;
  transition: all 0.3s linear;
}
</style>