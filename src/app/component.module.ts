
import {NgModule} from '@angular/core';
import {
  VoteChildModule, HomeChildModule, SubjectChildModule
} from './components';

@NgModule({
  declarations: [],
  imports: [
    VoteChildModule,
    HomeChildModule,
    SubjectChildModule
  ],
  exports: [
    VoteChildModule,
    HomeChildModule,
    SubjectChildModule
  ]

})
export class ComponentModule {
}
