import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';



const Aboutusroutes: Routes = [
  {
    path: '',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(Aboutusroutes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
