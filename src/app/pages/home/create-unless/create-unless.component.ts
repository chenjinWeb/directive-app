import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-create-unless',
  templateUrl: './create-unless.component.html',
  styleUrls: ['./create-unless.component.scss']
})
export class CreateUnlessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  condition:boolean = true;

}
