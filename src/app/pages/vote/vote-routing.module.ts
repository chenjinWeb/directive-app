import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoteTakerComponent} from './vote-taker/vote-taker.component';

const routes: Routes = [
  {
    path:'vote-taker',
    component:VoteTakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }
