import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceComponent } from './reference/reference.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { ChiffreComponent } from './chiffre/chiffre.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    ReferenceComponent,
    HomeContactComponent,
    ChiffreComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
