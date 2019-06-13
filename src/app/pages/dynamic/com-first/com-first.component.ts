import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-com-first',
  templateUrl: './com-first.component.html',
  styleUrls: ['./com-first.component.scss']
})
export class ComFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name:string

  checkName(name){
    this.name = name;
    console.info(name)
  }

}
