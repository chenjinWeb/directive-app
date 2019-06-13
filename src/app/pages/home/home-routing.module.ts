import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {NgifComponent} from './ngif/ngif.component';
import {NgTemplateComponent} from './ng-template/ng-template.component';
import {CreateUnlessComponent} from './create-unless/create-unless.component';
import {ShowToolTipComponent} from './show-tool-tip/show-tool-tip.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'ngif',
    component:NgifComponent
  },
  {
    path:'ngTemplate',
    component:NgTemplateComponent
  },
  {
    path:'create-unless',
    component:CreateUnlessComponent
  },
  {
    path:'tooltips',
    component:ShowToolTipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
