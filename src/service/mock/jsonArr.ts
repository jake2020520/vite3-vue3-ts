export const data = [
  {
    id: 20000005,
    name: "研发族群",
    pid: -1,
    type: 1,
    children: [
      {
        id: 20000006,
        name: "设计",
        pid: 20000005,
        type: 2,
        children: [
          {
            id: 20000007,
            name: "产品设计",
            pid: 20000006,
            type: 3,
            children: [],
          },
          {
            id: 20000014,
            name: "产品设计2",
            pid: 20000006,
            type: 3,
            children: [
              {
                id: 30000006,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000007,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000008,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000009,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000010,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000011,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000012,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000013,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000014,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000015,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000016,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000017,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
              {
                id: 30000018,
                name: "string",
                pid: null,
                type: 4,
                children: [],
              },
            ],
          },
        ],
      },
      { id: 20000013, name: "设计2", pid: 20000005, type: 2, children: [] },
    ],
  },
  {
    id: 20000008,
    name: "测族群1",
    pid: -1,
    type: 1,
    children: [
      {
        id: 20000009,
        name: "测试序列1",
        pid: 20000008,
        type: 2,
        children: [
          {
            id: 20000010,
            name: "测试自学列",
            pid: 20000009,
            type: 3,
            children: [],
          },
        ],
      },
    ],
  },
  { id: 20000011, name: "测族群2", pid: -1, type: 1, children: [] },
  { id: 20000012, name: "测族群3", pid: -1, type: 1, children: [] },
];

export const orgUserData = {
  code: 10000,
  msg: "成功!",
  data: {
    current: 1,
    pageSize: 10,
    total: 1490,
    result: [
      {
        userId: "00000360",
        tenantId: 2,
        userName: "王尚瑞",
        department: "大客户销售（杭州）",
        status: false,
      },
      {
        userId: "19006974",
        tenantId: 2,
        userName: "马云龙",
        department: "技术架构-架构方案节点（节点接口人）",
        status: false,
      },
      {
        userId: "20102225",
        tenantId: 2,
        userName: "郝鲁峰",
        department: "架构设计（技术架构）",
        status: false,
      },
      {
        userId: "21037549",
        tenantId: 2,
        userName: "胡恒心",
        department: "架构设计（技术架构）",
        status: false,
      },
      {
        userId: "19006374",
        tenantId: 2,
        userName: "王光",
        department: "生产技术",
        status: false,
      },
      {
        userId: "19029408",
        tenantId: 2,
        userName: "朱勇辉",
        department: null,
        status: false,
      },
      {
        userId: "19029509",
        tenantId: 2,
        userName: "陈江博",
        department: "生产技术",
        status: false,
      },
      {
        userId: "19037569",
        tenantId: 2,
        userName: "单磊",
        department: "生产技术",
        status: false,
      },
      {
        userId: "20000009",
        tenantId: 2,
        userName: "朱培初",
        department: "生产技术（TPA）",
        status: false,
      },
      {
        userId: "20008127",
        tenantId: 2,
        userName: "黄诚",
        department: "生产技术",
        status: false,
      },
    ],
  },
};

export const orgDimensionData = [
  {
    key: 1,
    name: "美国",
    age: 60,
    address: "New York No. 1 Lake Park",
    status: "未绑定",
    children: [
      {
        key: 11,
        name: "加州",
        age: 42,
        address: "New York No. 2 Lake Park",
        status: "未绑定",
      },
      {
        key: 12,
        name: "纽约",
        age: 30,
        address: "New York No. 3 Lake Park",
        status: "未绑定",
        children: [
          {
            key: 121,
            name: "华尔街",
            age: 16,
            address: "New York No. 3 Lake Park",
            status: "未绑定",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        status: "未绑定",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            status: "未绑定",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
                status: "未绑定",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
                status: "未绑定",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    status: "未绑定",
  },
];

const bb = {
  id: 20000013,
  title: "制造3组",
  nodeType: 1,
  pid: 10000001,
  pidNodeType: 0,
  type: null,
  adminId: null,
  adminName: null,
  children: [
    {
      id: 10000040,
      title: "制造3组-2",
      nodeType: 0,
      pid: 20000013,
      pidNodeType: 1,
      type: 20,
      adminId: "A0058810",
      adminName: "张丽",
      children: [],
      typeDesc: "子领域",
    },
    {
      id: 10000044,
      title: "制造3组-3",
      nodeType: 0,
      pid: 20000013,
      pidNodeType: 1,
      type: 20,
      adminId: "A0058810",
      adminName: "张丽",
      children: [],
      typeDesc: "子领域",
    },
    {
      id: 20000014,
      title: "制造3组-1",
      nodeType: 1,
      pid: 20000013,
      pidNodeType: 1,
      type: null,
      adminId: null,
      adminName: null,
      children: [],
      typeDesc: null,
      isLeaf: true,
    },
  ],
  typeDesc: null,
};