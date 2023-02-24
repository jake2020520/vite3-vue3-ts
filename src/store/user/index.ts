import { Module } from "vuex";
import { State } from "./types";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";
import { RootState } from "../index";

export * from "./actions";
export * from "./mutations";
export * from "./types";

const module: Module<State, RootState> = {
  namespaced: true,
  state: {
    useInfo: { id: "", name: "" },
    roles: {},
    token: "",
  },
  actions,
  getters,
  mutations,
};

export default module;
