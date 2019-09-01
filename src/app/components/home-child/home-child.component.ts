import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcj-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss'],
  host:{
    'class':'asd',
    id:'app'
  }
})
export class HomeChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  _home:string = '';

  @Input() 
  get home(){
    // console.info('get')
    return this._home
  } 

  set home(val){
    // console.info('set')
    this._home = val;
  }

}
