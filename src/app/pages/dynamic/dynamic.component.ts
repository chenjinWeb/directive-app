import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComFirstComponent} from './com-first/com-first.component';

@Component({
  selector: 'mcj-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit,AfterViewInit{

  constructor(
    private cfr:ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  @ViewChild('dmroom',{static:true,read:ViewContainerRef}) dmroom:ViewContainerRef;

  addComponent(){
    this.dmroom.clear();
    let comFirstFactory = this.cfr.resolveComponentFactory(ComFirstComponent)
    this.dmroom.createComponent(comFirstFactory).instance.checkName('mcj')
  }

  ngAfterViewInit(): void {
    console.info(this.dmroom)
  }



}
