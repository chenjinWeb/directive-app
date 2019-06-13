import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { ObservableComponent } from './observable/observable.component';
import {BaseModule} from '../../base-module';

@NgModule({
  declarations: [ObservableComponent],
  imports: [
    CommonModule,
    RxRoutingModule,
    BaseModule
  ]
})
export class RxModule { }
