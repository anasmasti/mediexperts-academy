import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./ui/pages/home/home.module').then(m => m.HomeModule)},
  { path: 'about', loadChildren: () => import('./ui/pages/about/about/about.module').then( m => m.AboutModule )},
  { path: 'contact', loadChildren: () => import('./ui/pages/contact/contact/contact.module').then( m => m.ContactModule ) },
  { path: 'formations', loadChildren: () => import('./ui/pages/formation/formation.module').then( m => m.FormationModule ) },
  { path: 'services', loadChildren: () => import('./ui/pages/our-services/our-services/our-services.module').then( m => m.OurServicesModule ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
