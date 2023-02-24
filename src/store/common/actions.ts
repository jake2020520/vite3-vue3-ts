import { ActionContext } from "vuex";
import { State } from "./types";
import { RootState } from "../index";
import { common } from "@/service";

/**
 * vip
 * @param store
 */
export async function getTodoData(store: ActionContext<State, RootState>) {
  const data = await common.getOrgTreeDataApi();
  store.commit("setWeather", data);
  return data;
}
