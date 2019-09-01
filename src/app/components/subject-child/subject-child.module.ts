import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectChildComponent } from './subject-child.component';

@NgModule({
  declarations: [SubjectChildComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SubjectChildComponent
  ],
  entryComponents:[
    SubjectChildComponent
  ]
})
export class SubjectChildModule { }
