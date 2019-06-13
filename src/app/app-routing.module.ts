import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:"full"
  },
  {
    path:'',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'',
    loadChildren: () => import('src/app/pages/vote/vote.module').then(m => m.VoteModule)
  },
  {
    path:'',
    loadChildren: () => import('src/app/pages/dynamic/dynamic.module').then(m => m.DynamicModule)
  },
  {
    path:'',
    loadChildren: () => import('src/app/pages/component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule)
  },
  {
    path:'',
    loadChildren: () => import('src/app/pages/start-form/start-form.module').then(m => m.StartFormModule)
  },
  {
    path:'',
    loadChildren: () => import('src/app/pages/rx/rx.module').then(m => m.RxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
