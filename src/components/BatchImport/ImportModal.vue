<template>
    <a-modal v-model:visible="visible" :title="title" centered @ok="handleOk" @cancel="handleCancel">
        <upload-content></upload-content>
    </a-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import UploadContent from './UploadContent.vue'

type Props = {
    title?: string
}

withDefaults(defineProps<Props>(), {
    title: "批量导入"
})

let visible = ref<boolean>(false);
// 确定按钮点击事件
const handleOk = () => {

}

// 取消按钮点击事件
const handleCancel = () => {
    visible.value = false;
}

// 显示面板
const show = (record?: any) => {
    visible.value = true;
}

defineExpose({
    show
})
</script>

<style lang="less" scoped>

</style>