import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObservableComponent} from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path:'observable',
    component:ObservableComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxRoutingModule { }
