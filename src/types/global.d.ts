import { LoDashStatic } from "lodash";
// import { VueSocket } from "vue-native-websocket";
import * as lodash from "lodash";

declare global {
  interface Window {
    _: LoDashStatic;
  }

  interface HttpResponse<T = any> {
    code: HttpCode;
    message: string;
    data?: T;
  }
  const GLOBAL_CONFIG: {
    env: string;
    apiDomain: string;
    VITE_ORG_AUTH_URL: string;
  };
  interface CurrentNodesType {
    selectedKeys: string[];
    nodes: any;
    expandedKeys?: string[];
    allKeys?: string[];
    e?: any;
    fromMark?: "deleteAuto" | "detailSelect"; // deleteAuto 删除tree 里面某项，自动跳到上一个项
  }
  interface GeneralType {
    [key: string]: unknown;
  }
}

declare module "vue/types/vue" {
  interface VueConstructor {
    options: {
      name: string;
      [index: string]: any;
    };
    // eslint-disable-next-line no-unused-vars
    aopUse: (plugin: any) => void;
  }
  // eslint-disable-next-line no-unused-vars
  // interface Vue {
  //   $socket: VueSocket;
  // }
}

export {};
