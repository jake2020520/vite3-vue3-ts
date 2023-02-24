import { h, resolveComponent } from "vue";
export const userColumns = [
  {
    title: "姓名",
    dataIndex: "userName",
    key: "userName",
    width: "20%",
  },
  {
    title: "工号",
    dataIndex: "userId",
    key: "userId",
    width: "20%",
  },
  {
    title: "部门",
    dataIndex: "department",
    width: "40%",
    key: "department",
  },
  {
    title: "状态",
    dataIndex: "status",
    width: "20%",
    key: "status",
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
export const dimensionColumns = [
  {
    title: "名称",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "编码",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "状态",
    dataIndex: "bindFlag",
    key: "bindFlag",
    width: 120,
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
