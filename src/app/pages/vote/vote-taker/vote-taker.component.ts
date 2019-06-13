import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.scss']
})
export class VoteTakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aa='12342345'

  agreeNum=0

  disAgreeNum=0;

  voters=['mcj','cl','mx']

  voteClick(ev){
    if(ev){
      this.agreeNum++
    }else{
      this.disAgreeNum++
    }
  }


}
