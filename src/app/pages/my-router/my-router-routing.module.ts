import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterEventsComponent} from './router-events/router-events.component';
import {MyRouterComponent} from './my-router.component';
import {RouterNameComponent} from './router-name/router-name.component';
import {MyGuardGuard} from '../../guard/my-guard.guard';
import {MyResolveService} from '../../resolve/my-resolve.service';

const routes: Routes = [
  {
    path:'my-router',
    component:MyRouterComponent,
    canActivate:[MyGuardGuard],
    resolve:{
      limit:MyResolveService
    },
    data:{
      code:'LIMIT_ROUTER'
    },
    children:[
      {
        path:'router-events',
        component:RouterEventsComponent,
        data:{
          name:'mcj',
          code:'MCJ_CL'
        }
      },
      {
        path:'router-events/:id',
        component:RouterEventsComponent
      },
      {
        path:'router-name',
        component:RouterNameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRouterRoutingModule { }
