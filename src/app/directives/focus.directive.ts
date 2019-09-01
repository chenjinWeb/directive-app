import { Directive, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[mcjFocus]'
})
export class FocusDirective {

  constructor(private el:ElementRef) {
    console.info(this.el)
    this.el.nativeElement.focus()
  }

}
