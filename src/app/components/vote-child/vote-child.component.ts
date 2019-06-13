import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mcj-vote-child',
  templateUrl: './vote-child.component.html',
  styleUrls: ['./vote-child.component.scss']
})
export class VoteChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() voter:string

  @Output() voteClick= new EventEmitter<any>();

  btnAble:boolean = false;

  voterClick(bool){
    //this
    this.voteClick.emit(bool)
    this.btnAble = true;
  }

}
