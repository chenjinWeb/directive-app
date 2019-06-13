import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { ComFirstComponent } from './com-first/com-first.component';
import { ComponentInteractionComponent } from './component-interaction.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ComFirstComponent, ComponentInteractionComponent],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule,
    FormsModule
  ]
})
export class ComponentInteractionModule { }
