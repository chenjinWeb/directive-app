import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormValidateComponent} from './form-validate/form-validate.component';

const routes: Routes = [
  {
    path:'form-validate',
    component:FormValidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartFormRoutingModule { }
