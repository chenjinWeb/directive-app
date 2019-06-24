import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRouterRoutingModule } from './my-router-routing.module';
import { RouterEventsComponent } from './router-events/router-events.component';
import { MyRouterComponent } from './my-router.component';
import { RouterNameComponent } from './router-name/router-name.component';

@NgModule({
  declarations: [RouterEventsComponent, MyRouterComponent, RouterNameComponent],
  imports: [
    CommonModule,
    MyRouterRoutingModule
  ]
})
export class MyRouterModule { }
