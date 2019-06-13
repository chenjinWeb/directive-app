import {Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[mcjHighlight]',
  // host:{
  //   '(click)': 'onClick($event)'
  // }
  // host:{
  //   'role':'p',
  //   '[class.isRed]':'isRed'
  // }
})
export class HighlightDirective {

  constructor(
    private el:ElementRef,
    private viewContainer:ViewContainerRef
  ) {
    console.info(el)
    //console.info(this.highColor)
  }

  /*@HostListener是属性装饰器，用来为宿主元素添加监听事件*/
  //第一种写法
  // @HostListener('click',['$event'])
  // onClick(el){
  //   console.info(el.target === this.el.nativeElement)
  // }
  //
  // @HostListener('document:click',['$event'])
  // onClick(ev){
  //   console.info(this.el.nativeElement.contains(ev.target))
  // }

  //第二种写法，在@Directive装饰中的元数组(host)添加事件
  // onClick(el){
  //   console.info(el)
  //   el.target.style.fontSize = '20px'
  // }

  /*@HostBinding属性装饰器是动态设置宿主元素的属性值*/
  //第一种写法
  // @HostBinding('class.isRed') isRed:boolean
  // @HostBinding('attr.role') role = 'p'
  //
  // @HostListener('mousedown')
  // mouseDown(){
  //   this.isRed = true;
  // }
  //
  // @HostListener('mouseup')
  // mouseUp(){
  //   this.isRed = false;
  // }

  //第二种写法,在@Directive装饰中的元数组(host)添加属性
  // isRed:boolean
  //
  // @HostListener('mousedown')
  // mouseDown(){
  //   this.isRed = true;
  // }
  //
  // @HostListener('mouseup')
  // mouseUp(){
  //   this.isRed = false;
  // }


  //做一个效果，鼠标放上去显示背景红色，鼠标移开背景消失
  // @HostListener('mouseenter')
  // mouseEnter(){
  //   this.highLight('red')
  // }
  //
  // @HostListener('mouseleave')
  // mouseLeave(){
  //   this.highLight(null)
  // }
  //
  // highLight(color){
  //   this.el.nativeElement.style.backgroundColor = color;
  // }


  //我们应该让指令使用者自己定义颜色，@Input输入属性
  // @Input() highColor:string
  //
  // @HostListener('mouseenter')
  // mouseEnter(){
  //   console.info(this.highColor)
  // }

  //官网的例子
  @Input('mcjHighlight') highColor:string

  @HostListener('mouseenter')
  mouseEnter(){
    this.highLight(this.highColor || 'red')
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.highLight(null)
  }

  highLight(color){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
