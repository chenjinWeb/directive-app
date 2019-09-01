import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { ObservableComponent } from './observable/observable.component';
import {BaseModule} from '../../base-module';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [ObservableComponent, SubjectComponent],
  imports: [
    CommonModule,
    RxRoutingModule,
    BaseModule
  ]
})
export class RxModule { }
