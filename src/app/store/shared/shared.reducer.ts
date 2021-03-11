import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { setLoadingAction } from "./shared.action";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(initialState,
  on( setLoadingAction, (state, action) => {
      return {
      ...state,
      loading: action.statu
    }
   }
  ))

export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action)
}
