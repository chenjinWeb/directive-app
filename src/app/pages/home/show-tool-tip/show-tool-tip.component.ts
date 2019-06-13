import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcj-show-tool-tip',
  templateUrl: './show-tool-tip.component.html',
  styleUrls: ['./show-tool-tip.component.scss']
})
export class ShowToolTipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tips:string = '这是一个非常帅气的男生!'

}
