import { Action } from "@ngrx/store";

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default:
      return state;
  }
}
