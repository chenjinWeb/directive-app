import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { ComFirstComponent } from './com-first/com-first.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { FirstChildComponent } from './first-parent/first-child/first-child.component';

@NgModule({
  declarations: [DynamicComponent, ComFirstComponent, FirstParentComponent, FirstChildComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  entryComponents:[
    ComFirstComponent,
    FirstChildComponent
  ]
})
export class DynamicModule { }
