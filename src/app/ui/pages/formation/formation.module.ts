import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllFormationComponent } from './all-formation/all-formation.component';
import { FormationComponent } from './formation/formation.component';
import { DomaineComponent } from './domaine/domaine.component';

const routes: Routes = [
  { path: '', component: AllFormationComponent },
];

@NgModule({
  declarations: [AllFormationComponent, FormationComponent, DomaineComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],

})
export class FormationModule { }
