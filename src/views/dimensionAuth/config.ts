import { h, resolveComponent } from "vue";
export const dimensionColumns = [
  {
    title: "名称",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "编码",
    dataIndex: "id",
    key: "id",
    width: "12%",
  },
  {
    title: "状态",
    dataIndex: "bindFlag",
    key: "bindFlag",
    customRender: ({ text }: { text: boolean }) => {
      if (text == true) {
        return h("div", [
          h(resolveComponent("LinkOutlined"), {
            style: { color: "#52C41A" },
          }),
          h(
            "span",
            {
              style: { color: "#52C41A", "margin-left": "8px" },
            },
            "已绑定"
          ),
        ]);
      } else {
        return h("div", [
          h(resolveComponent("DisconnectOutlined"), {
            style: { color: "#8F959E" },
          }),
          h(
            "span",
            {
              style: { color: "#8F959E", "margin-left": "8px" },
            },
            "未绑定"
          ),
        ]);
      }
    },
  },
];
