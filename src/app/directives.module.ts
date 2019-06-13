import {NgModule} from "@angular/core";
import {HighlightDirective, TooltipDirective, UnlessDirective} from './directives/index'

@NgModule({
  imports: [

  ],
  declarations: [
    HighlightDirective,
    UnlessDirective,
    TooltipDirective
  ],
  exports: [
    HighlightDirective,
    UnlessDirective,
    TooltipDirective
  ],
  providers: [

  ]
})
export class DirectivesModule {

}
