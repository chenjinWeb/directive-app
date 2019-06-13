import {Component, Host, Input, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import {ComponentInteractionComponent} from '../component-interaction.component';

@Component({
  selector: 'mcj-com-first',
  templateUrl: './com-first.component.html',
  styleUrls: ['./com-first.component.scss']
})
export class ComFirstComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
  //1.
  //@Input() hero:any


  //2.
  _/*name:any
  @Input() set name(value:string){
    this._name = value
    console.info(value)
  }

  get name(){
    console.info(1111)
    return this._name
  }*/

  //4.
  time:number = 10;

  interval:any

  start(){
    this.interval = window.setInterval(()=>{
      this.time--
    },1000)
  }

  stop(){
    clearInterval(this.interval)
  }





}
