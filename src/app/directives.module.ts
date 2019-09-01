import {NgModule} from "@angular/core";
import {HighlightDirective, TooltipDirective, UnlessDirective, FocusDirective} from './directives/index'

@NgModule({
  imports: [

  ],
  declarations: [
    HighlightDirective,
    UnlessDirective,
    TooltipDirective,
    FocusDirective
  ],
  exports: [
    HighlightDirective,
    UnlessDirective,
    TooltipDirective,
    FocusDirective
  ],
  providers: [

  ]
})
export class DirectivesModule {

}
