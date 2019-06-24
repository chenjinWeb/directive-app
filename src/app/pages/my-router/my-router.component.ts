import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'mcj-my-router',
  templateUrl: './my-router.component.html',
  styleUrls: ['./my-router.component.scss']
})
export class MyRouterComponent implements OnInit {

  constructor(
    private router:Router,
    private location:Location,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(res=>{
      console.info(res)
    })



    this.router.events.subscribe(res=>{
      //console.info(res)
    })
  }

  goBack(){
    this.location.back();
  }

  goTo(){
    this.router.navigate(['/home'])
  }

}
