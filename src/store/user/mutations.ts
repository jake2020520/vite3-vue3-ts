import { State } from "./types";

export function setUseInfo(state: State, payload?: any) {
  state.useInfo = payload;
}
export function setRoles(state: State, payload?: any) {
  state.roles = payload;
}
export function setToken(state: State, payload?: any) {
  state.token = payload;
}
