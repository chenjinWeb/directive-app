import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero={
    name:'mcj'
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
