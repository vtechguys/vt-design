import { actions } from "./names";

export function singleReducer(state, action) {
  if (action.type !== actions.toggle) {
    return state;
  }

  return [action.payload.id];
}

export function multipleReducer(state, action) {
  if (action.type !== actions.toggle) {
    return state;
  }

  let nextState = state;

  const alreadyExist = state.includes(action.payload.id);

  if (!alreadyExist) {
    nextState = [...state, action.payload.id];
  } else {
    nextState = state.filter((id) => id !== action.payload.id);
  }

  return nextState;
}
