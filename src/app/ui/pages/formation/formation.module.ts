import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllFormationComponent } from './all-formation/all-formation.component';
import { FormationComponent } from './formation/formation.component';
import { DomaineComponent } from './domaine/domaine.component';
import { StoreModule } from '@ngrx/store';
import { formationReducer } from './state/formation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FormationEffects } from './state/formation.effect';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from '../../shared/common/loading-spinner/loading-spinner.component';
import { ThemeComponent } from './theme/theme.component';
import { ShowFormationComponent } from './show-formation/show-formation.component';

const routes: Routes = [
  { path: '', component: AllFormationComponent },
  { path: ':id', component: ShowFormationComponent },
];

@NgModule({
  declarations: [
    ShowFormationComponent,
    AllFormationComponent,
    FormationComponent,
    DomaineComponent,
    LoadingSpinnerComponent,
    ThemeComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('formation', formationReducer),
    EffectsModule.forFeature([FormationEffects])
  ],

})
export class FormationModule { }
