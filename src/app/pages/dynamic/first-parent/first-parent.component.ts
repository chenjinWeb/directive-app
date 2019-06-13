import {
  AfterContentInit,
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef, ViewEncapsulation
} from '@angular/core';
import {FirstChildComponent} from './first-child/first-child.component';

@Component({
  selector: 'mcj-first-parent',
  templateUrl: './first-parent.component.html',
  styleUrls: ['./first-parent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FirstParentComponent implements OnInit,AfterViewInit,AfterContentInit {

  constructor(
    private changeDetector:ChangeDetectorRef,
    private cfr:ComponentFactoryResolver //组件工厂解析器
  ) { }

  ngOnInit() {

  }

  parentData={
    name:'mcj'
  }

  changeParent(){
    this.parentData = {
      name:'cl'
    }
  }

  //获取插座,用来显示动态的组件
  @ViewChild('container',{static:false,read:ViewContainerRef}) container:ViewContainerRef;

  ngAfterViewInit(): void {
    this.addComponent();
  }

  addComponent(){
    this.container.clear();
    let com = this.cfr.resolveComponentFactory(FirstChildComponent);
    this.container.createComponent(com).instance.name = 'mcj';
    this.changeDetector.detectChanges();
  }

  ngAfterContentInit(): void {

  }




}
