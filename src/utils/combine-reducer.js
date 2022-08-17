import { mergeN } from "./merge.util";

export function combineReducer(reducers) {
  return function reducer(state, action) {
    const states = reducers.map((reducer) => reducer(state, action));
    return mergeN(states);
  };
}
