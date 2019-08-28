import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color:string

  userInfo={
    name:'mcj',
    age:20
  }

}
