/*
 * @Author: moka === gaoyuanfell@sina.com
 * @Date: 2019-04-11 17:13:28
 * @Last Modified by:   moka
 * @Last Modified time: 2019-04-11 17:13:28
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
//import {PipeModule} from './pipe.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentModule} from './component.module';
import {PipeModule} from './pipe.module';
import {DirectivesModule} from './directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ComponentModule,
    DirectivesModule,
    PipeModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    ComponentModule,
    DirectivesModule,
    PipeModule
  ]

})
export class BaseModule {
}
