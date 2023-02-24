<template>
  <div class="home">auth home</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
// import { TodoProps } from "@/store/common/types";
import { DatePicker } from "ant-design-vue";
import dayjs from "dayjs";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import type { TreeProps } from "ant-design-vue";
import { data } from "./jsonArr";

export default defineComponent({
  components: {
    HelloWorld,
    DatePicker,
  },
  setup() {
    const expandedKeys = ref<number[]>([30000006]);
    const selectedKeys = ref<number[]>([30000006]);
    const fieldNames: TreeProps["fieldNames"] = {
      key: "id",
      title: "name",
    };
    const treeData: any = data;

    onMounted(() => {
      setTimeout(() => {
        expandedKeys.value = [30000012];
        selectedKeys.value = [30000012];
      }, 2000);
    });
    return { treeData, expandedKeys, selectedKeys, fieldNames };
  },

  mounted() {
    console.log("login-mounted");
  },
});
</script>
