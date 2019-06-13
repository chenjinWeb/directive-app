import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {DirectivesModule} from '../../directives.module';
import { NgifComponent } from './ngif/ngif.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { CreateUnlessComponent } from './create-unless/create-unless.component';
import { ShowToolTipComponent } from './show-tool-tip/show-tool-tip.component';

@NgModule({
  declarations: [HomeComponent, NgifComponent, NgTemplateComponent, CreateUnlessComponent, ShowToolTipComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule
  ]
})
export class HomeModule { }
