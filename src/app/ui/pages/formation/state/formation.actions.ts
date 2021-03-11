import { createAction, props } from "@ngrx/store";
import { Domaine } from "src/app/models/domaine.model";
import { Formation } from "src/app/models/formation.model";
import { Theme } from "src/app/models/theme.model";

const GET_FORMATIONS = '[Formation Page] Get Formations'
const GET_FORMATIONS_SUCCESS = '[Formation Page] Get Formations Success'

const GET_THEMES = '[Formation Page] Get Themes'
const GET_THEMES_SUCCESS = '[Formation Page] Get Themes Success'

const GET_DOMAINES = '[Formation Page] Get Domaines'
const GET_DOMAINES_SUCCESS = '[Formation Page] Get Domaines Success'

const GET_SINGLE_FORMATION= '[Formation Page] Get Single Formation'
const GET_SINGLE_FORMATION_SUCCESS = '[Formation Page] Get Single Formation Success'

// formation actions
export const getFormationsAction = createAction(GET_FORMATIONS)
export const getFormationsSuccessAction = createAction(GET_FORMATIONS_SUCCESS,
  props<{formations: Formation[]}>())

// theme actions
export const getThemesAction = createAction(GET_THEMES)
export const getThemesSuccessAction = createAction(GET_THEMES_SUCCESS,
  props<{themes: Theme[]}>())

// domaine actions
export const getDomainesAction = createAction(GET_DOMAINES)
export const getDomainesSuccessAction = createAction(GET_DOMAINES_SUCCESS,
  props<{domaines: Domaine[]}>())

// single formation actions
export const getSingleFormationAction = createAction(GET_SINGLE_FORMATION,
  props<{formation_id: any}>())
export const getSingleFormationSuccessAction = createAction(GET_SINGLE_FORMATION_SUCCESS,
  props<{single_formation: Formation[]}>())


