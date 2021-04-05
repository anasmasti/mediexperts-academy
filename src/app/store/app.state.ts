import { SharedState } from "./shared/shared.state";
import { sharedReducer } from "./shared/shared.reducer";

export interface AppState {
  shared: SharedState;
}
export const appReducer = {
  shared: sharedReducer
}
