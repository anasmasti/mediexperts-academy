import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Formation } from "src/app/models/formation.model";
import { Theme } from "src/app/models/theme.model";
import { AppState } from "src/app/store/app.state";
import { FormationState } from "./formation.state"

// call formation state
export const getFormationState = createFeatureSelector<FormationState>('formation')

// create selector for formations
export const getFormation = createSelector(getFormationState,
  (state) => {
    return state.formation;
  })
// create selector for themes
export const getTheme = createSelector(getFormationState,
  (state) => {
    return state.theme;
  })
// create selector for domaine
export const getDomaine = createSelector(getFormationState,
  (state) => {
    return state.domaine;
  })
// create selector for themes by domaine
export const getThemeByDomaine = createSelector(getTheme,
  (getTheme: Theme[], props: any) => {
    const themes_by_domaine = getTheme.filter(t => t.mysysdomain_id == props.domaine_id)
    return themes_by_domaine
  })
// create selector for formations by theme
export const getFormationByTheme = createSelector(getFormation,
  (getFormation: Formation[], props: any) => {
    const formations_by_theme = getFormation.filter(f => f.mysystheme_id == props.theme_id)
    return formations_by_theme
  })
// create selector for single formations
export const getSingelFormation = createSelector(getFormationState,
  (state) => {
    return state.single_formation
  })
