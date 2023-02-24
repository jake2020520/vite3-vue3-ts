import { State } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setWeather(state: State, payload?: any) {
  state.todoData = payload;
}
