import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicComponent} from './dynamic.component';
import {FirstParentComponent} from './first-parent/first-parent.component';

const routes: Routes = [
  {
    path:'dynamic',
    component:DynamicComponent
  },
  {
    path:'first-parent',
    component:FirstParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
