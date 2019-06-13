import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[mcjTooltip]'
})
export class TooltipDirective implements OnInit{

  constructor(
    private el:ElementRef,
    private renderer2:Renderer2
  ) { }

  @Input('mcjTooltip') toolTips:string

  createHtml:any

  visible:boolean= false;

  ngOnInit(): void {
    //console.info(this.el.nativeElement)
    //console.info(this.toolTips)
    this.createHtml = this.renderer2.createElement('div')
    this.renderer2.addClass(this.createHtml,'asd')
    this.createHtml.innerHTML  = this.outHtml();
    //console.info(this.createHtml)
    this.renderer2.appendChild(this.el.nativeElement,this.createHtml)
  }

  outHtml():string{
    return `<div class="tips" style="display: ${this.visible? 'block' : 'none'}"><span>${this.toolTips}</span></div>`
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.visible = true;
    this.createHtml.innerHTML  = this.outHtml();
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.createHtml.innerHTML  = '';
  }

}
