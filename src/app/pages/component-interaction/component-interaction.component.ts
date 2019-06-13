import {Component,  OnInit, ViewChild} from '@angular/core';
import {ComFirstComponent} from './com-first/com-first.component';

@Component({
  selector: 'mcj-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  /***********************第一种情况***********************/
  //hero={name:'mcj'}

  /***********************第二种情况***********************/
  /*name:string = 'mcj'

  changeName(){
    this.name = 'cl'
  }

  getName(){
    console.info(this.name)
  }*/

  /***********************第四种情况***********************/


  /***********************第五种情况***********************/
  @ViewChild(ComFirstComponent,{static:false}) comFirstComponent:ComFirstComponent;
  start(){
    this.comFirstComponent.start()
  }

  stop(){
    this.comFirstComponent.stop();
  }

}
