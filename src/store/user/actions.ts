/*
 * @Author: 徐德松 lingxuesonga@163.com
 * @Date: 2023-02-24 09:33:10
 * @LastEditors: 徐德松 lingxuesonga@163.com
 * @LastEditTime: 2023-02-24 15:56:20
 * @FilePath: \data-authority-1\src\store\user\actions.ts
 * @Description:
 */
import { ActionContext } from "vuex";
import { State } from "./types";
import { RootState } from "../index";
import { ACCESS_TOKEN } from "@/const/index";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

/**
 * 存储用户信息 包括token
 * @param store
 */
export async function getInfo(
  store: ActionContext<State, RootState>
  // params: any
) {
  return new Promise<void>(async (resolve, reject) => {
    //@ts-ignore
    const user = jwtDecode(Cookies.get(ACCESS_TOKEN) as any).user;
    const token =
      localStorage.getItem(ACCESS_TOKEN) || Cookies.get(ACCESS_TOKEN);
    store.commit("setUseInfo", user);
    store.commit("setToken", token);
    resolve();
  });
}
