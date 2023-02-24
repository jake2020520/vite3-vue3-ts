import { createStore } from "vuex";
import common, { State as CommonState } from "./common";
import user, { State as User } from "./user";
export interface RootState {
  common?: CommonState;
  user?: User;
}

const modules = {
  common,
  user,
};

export default createStore<RootState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
});

export { modules };
