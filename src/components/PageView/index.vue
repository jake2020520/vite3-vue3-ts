<template>
    <div class="page-layout">
        <Transition name="silder">
            <div class="page-layout-left" v-show="collapsed" ref="leftRef" :style="{width: leftWidth + 'px'}">
                <div class="content">
                    <slot name="left"></slot>
                </div>
            </div>
        </Transition>
        <div class="page-layout-right" :style="{width: collapsed ? `calc(100% - ${leftWidth}px` : '100%'}">
            <div class="trigger" :class="{ 'trigger-turn': !collapsed }">
                <div class="trigger-box">
                    <menu-unfold-outlined v-if="collapsed" @click="() => (collapsed = !collapsed)" />
                    <menu-fold-outlined v-else @click="() => (collapsed = !collapsed)" />
                </div>
            </div>
            <div class="content">
                <slot name="right"></slot>
            </div>
        </div>
    </div>

</template>
 
<script lang="ts" setup>
import { ref } from 'vue';
// 左侧内容收缩状态
let collapsed = ref<boolean>(true);
type Props = {
    leftWidth?: number
}
withDefaults(defineProps<Props>(), {
    leftWidth: 320
})
</script>

<style lang="less" scoped>
.page-layout {
    display: flex;
    flex-direction: row;
    background: #fff;
    min-height: calc(100% - @foot-height);

    .page-layout-left {
        position: relative;
        border-right: 1px solid #E5E8EF;
    }

    .page-layout-right {
        // flex: 1;
        position: relative;

        .trigger {
            position: absolute;
            left: -15px;
            top: 12px;

            .trigger-box {
                background: url("@/assets/trigger-left.jpeg") no-repeat;
                background-size: 100% 100%;

                span.anticon {
                    font-size: 8px;
                    padding: 14px 2px 14px 5px;
                    color: #8F959E;
                }
            }
        }

        .trigger-turn {
            position: absolute;
            left: 0;
            top: 12px;

            .trigger-box {
                transform: rotateY(180deg);
            }
        }
    }

    .content {
        padding: 20px;
        background-color: #fff;
    }

    .silder-enter-active,
    .silder-leave-active {
        transition: width 0.3s linear;
    }

    .silder-enter-from,
    .silder-leave-to {
        width: 0 !important;
    }
}
</style>