import { Domaine } from "src/app/models/domaine.model";
import { Formation } from "src/app/models/formation.model";
import { Theme } from "src/app/models/theme.model";

export interface FormationState {
  formation: Formation[]
  theme: Theme[]
  domaine: Domaine[]
  single_formation: Formation[]
}

export const initialState: FormationState = {
  formation: [],
  theme: [],
  domaine: [],
  single_formation: []
}
