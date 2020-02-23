import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'aboutus' ,
    loadChildren: ()=>import('./aboutus/aboutus.module').then(m=>m.AboutusModule)
  },
  {
    path: 'contact',
    loadChildren: ()=>import('./contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path: 'home',
    loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
