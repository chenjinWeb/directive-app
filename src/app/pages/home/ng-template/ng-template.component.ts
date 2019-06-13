import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heros =[
    {
      name:'mcj',
      age:30
    },
    {
      name:'cl',
      age:20
    },
    {
      name:'tony',
      age:25
    }
  ]

}
