import { createReducer, on } from "@ngrx/store"
import { getDomainesAction, getDomainesSuccessAction, getFormationsAction, getFormationsSuccessAction, getSingleFormationAction, getSingleFormationSuccessAction, getThemesAction, getThemesSuccessAction } from "./formation.actions";
import { initialState } from "./formation.state"

const _formationReducer = createReducer(initialState,
  // get formations reducers
  on(getFormationsAction, (state) => {
    return {
      ...state,
      formation: state.formation
    }
  }),
  on(getFormationsSuccessAction, (state, action) => {
    return {
      ...state,
      formation: action.formations,
    }
  }),
  // get themes reducers
  on(getThemesAction, (state) => {
    return {
      ...state,
      theme: state.theme
    }
  }),
  on(getThemesSuccessAction, (state, action) => {
    return {
      ...state,
      theme: action.themes
    }
  }),
  // get domaines reducers
  on(getDomainesAction, (state) => {
    return {
      ...state,
      domaine: state.domaine
    }
  }),
  on(getDomainesSuccessAction, (state, action) => {
    return {
      ...state,
      domaine: action.domaines
    }
  }),
  // get single formation reducers
  on(getSingleFormationAction, (state) => {
    return {
      ...state,
      single_formation: state.single_formation
    }
  }),
  on(getSingleFormationSuccessAction, (state, action) => {
    return {
      ...state,
      single_formation: action.single_formation
    }
  })
);

export function formationReducer(state: any, actions: any) {
  return _formationReducer(state, actions)
}
