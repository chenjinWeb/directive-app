import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import {BaseModule} from '../../base-module';
import {VoteRoutingModule} from './vote-routing.module';

@NgModule({
  declarations: [VoteTakerComponent],
  imports: [
    CommonModule,
    VoteRoutingModule,
    BaseModule,
  ]
})
export class VoteModule { }
