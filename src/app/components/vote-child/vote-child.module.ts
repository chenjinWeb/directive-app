import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteChildComponent } from './vote-child.component';

@NgModule({
  declarations: [VoteChildComponent],
  imports: [
    CommonModule
  ],
  exports:[
    VoteChildComponent
  ],
  entryComponents:[
    VoteChildComponent
  ]
})
export class VoteChildModule { }
