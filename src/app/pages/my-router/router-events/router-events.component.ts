import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mcj-router-events',
  templateUrl: './router-events.component.html',
  styleUrls: ['./router-events.component.scss']
})
export class RouterEventsComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit() {

    /*console.info(this.activatedRoute.parent.routeConfig)

    //xxx?id=12
    this.activatedRoute.queryParamMap.subscribe(res=>{
      console.info(res)
    })

    //xxx/12
    this.activatedRoute.paramMap.subscribe(res=>{
      console.info(res)
    })

    //data的数据
    this.activatedRoute.data.subscribe(res=>{
      console.info(res)
    })*/

  }

}
