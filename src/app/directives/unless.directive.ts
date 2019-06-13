import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[mcjUnless]'
})
export class UnlessDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) {
    console.info(this.templateRef)
    console.info(this.viewContainer)
    this.viewContainer.createEmbeddedView(this.templateRef,{ m: 'value' })
  }

  @Input() set mcjUnless(condition:boolean){
    if(condition){
      this.viewContainer.clear();
    }else{
      this.viewContainer.createEmbeddedView(this.templateRef,{ m: 'value' })
    }

  }

}
