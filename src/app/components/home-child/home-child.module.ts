import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeChildComponent } from './home-child.component';

@NgModule({
  declarations: [HomeChildComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomeChildComponent
  ],
  entryComponents:[
    HomeChildComponent
  ]
})
export class HomeChildModule { }
