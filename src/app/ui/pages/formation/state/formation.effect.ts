import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { FormationService } from 'src/app/services/formation.service';
import { getDomainesAction, getDomainesSuccessAction, getFormationsAction, getFormationsSuccessAction, getSingleFormationAction, getSingleFormationSuccessAction, getThemesAction, getThemesSuccessAction } from './formation.actions';
import { map, mergeMap } from 'rxjs/operators';
import { Formation } from 'src/app/models/formation.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingAction } from 'src/app/store/shared/shared.action';
import { Theme } from 'src/app/models/theme.model';
import { Domaine } from 'src/app/models/domaine.model';

@Injectable()
export class FormationEffects {

  constructor(
    private actions$: Actions,
    private formationservice: FormationService,
    private store: Store<AppState>
  ) {}

  //create effect for theme
  loadFormations$ = createEffect((): any =>{
    return this.actions$.pipe(
      ofType(getFormationsAction),
      mergeMap(() => this.loadFormation())
    )}
  );
  //create effect for theme
  loadThemes$ = createEffect((): any =>{
    return this.actions$.pipe(
      ofType(getThemesAction),
      mergeMap(() => this.loadTheme())
    )}
  );
  //create effect for domaine
  loadDomaines$ = createEffect((): any =>{
    return this.actions$.pipe(
      ofType(getDomainesAction),
      mergeMap(() => this.loadDomaine())
    )}
  );
  //create effect for single formation
  loadSingleFormation$ = createEffect((): any =>{
    return this.actions$.pipe(
      ofType(getSingleFormationAction),
      mergeMap((action) => this.loadSingleFormation(action.formation_id))
    )}
  );

  ///////////////////////////  functions //////////////////////////////////

  //load formations from service
  loadFormation() {
   return this.formationservice.getFormations().pipe(
      map(
        (formations: Formation[]) => {
          this.store.dispatch(setLoadingAction({statu: false}))
          return getFormationsSuccessAction({formations});
        }
      )
    );
  }
  //load themes from service
  loadTheme() {
    return this.formationservice.getThemes().pipe(
       map(
         (themes: Theme[]) => {
           this.store.dispatch(setLoadingAction({statu: false}))
           return getThemesSuccessAction({themes});
         }
       )
     );
   }
  //load themes from service
  loadDomaine() {
    return this.formationservice.getDomaines().pipe(
       map(
         (domaines: Domaine[]) => {
           this.store.dispatch(setLoadingAction({statu: false}))
           return getDomainesSuccessAction({domaines});
         }
       )
     );
   }
  //load single formation from service
  loadSingleFormation(id: any) {
    return this.formationservice.getSingleFormation(id).pipe(
       map(
         (single_formation: Formation[]) => {
           this.store.dispatch(setLoadingAction({statu: false}))
           return getSingleFormationSuccessAction({single_formation});
         }
       )
     );
   }
}
