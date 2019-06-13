import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mcj-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name:string = '';

}
