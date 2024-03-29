import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ContactModule { }
