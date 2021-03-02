import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './our-services.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:OurServicesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OurServicesModule { }
