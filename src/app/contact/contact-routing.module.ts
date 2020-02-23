import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';



const Contactroutes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(Contactroutes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
