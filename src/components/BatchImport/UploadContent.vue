<template>
    <div class="upload-wrap">
        <div class="template-box" @click="downloadTemplate">
            <div class="box-left">
                <h2>下载模板</h2>
                <p>导出编辑模板进行编辑</p>
            </div>
            <div class="box-right">
                <a-button>
                    <DownloadOutlined :style="{ color: '#4F5969' }" />
                    导出模板
                </a-button>
            </div>
        </div>
        <div class="upload-box">
            <a-upload-dragger v-model:fileList="fileList" name="file" :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76" @change="handleChange" @drop="handleDrop">
                <p class="upload-drag-icon">
                    <FileTextFilled :style="{ color: '#E5E8EF', fontSize: '50px' }" />
                </p>
                <p class="upload-text">
                    将文件拖到此处，或<span>点击上传</span>
                </p>
                <p class="upload-hint">
                    上传成功后点击“提交”
                </p>
            </a-upload-dragger>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { UploadChangeParam } from 'ant-design-vue';
import { message } from 'ant-design-vue';
// 下载模板
const downloadTemplate = () => {

}

let fileList = ref([]);

// 文件拖拽事件
const handleDrop = (e: DragEvent) => {
    console.log(e);
}

// 文件变化事件
const handleChange = (info: UploadChangeParam) => {
    const status = info.file.status;
    if (status !== 'uploading') {
        console.log(info.file, info.fileList);
    }
    if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
    }
};
</script>


<style lang="less" scoped>
.template-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background-color: #F7F8FA;
    border: 1px solid #E5E8EF;
    border-radius: 2px;
    margin-bottom: 16px;

    h2 {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        margin-bottom: 6px;
    }

    p {
        font-size: 12px;
        color: #8F959E;
        margin: 0;
    }
}

.upload-box {
    .upload-drag-icon {}

    .upload-text {
        font-size: 12px;
        line-height: 18px;
        color: #4F5969;
        margin: 20px 0 8px;

        span {
            color: #3471FF;
        }
    }

    .upload-hint {
        font-size: 12px;
        color: #8F959E;
        line-height: 18px;
    }
}

:deep(.ant-upload.ant-upload-drag) {
    border: 1px solid #E5E8EF;
    background: #F7F8FA;
}

:deep(.ant-upload.ant-upload-drag .ant-upload) {
    padding: 48px 0;
}

:deep(.ant-btn) {
    color: #4F5969;
}
</style>