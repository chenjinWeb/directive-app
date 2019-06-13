import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartFormRoutingModule } from './start-form-routing.module';
import { FormValidateComponent } from './form-validate/form-validate.component';
import {BaseModule} from '../../base-module';

@NgModule({
  declarations: [FormValidateComponent],
  imports: [
    CommonModule,
    StartFormRoutingModule,
    BaseModule
  ]
})
export class StartFormModule { }
