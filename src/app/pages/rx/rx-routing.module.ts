import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObservableComponent} from './observable/observable.component';

const routes: Routes = [
  {
    path:'observable',
    component:ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxRoutingModule { }
