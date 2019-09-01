import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mcj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.ob$.pipe(
      map((item:any)=>{
        return item+111
      })
    ).subscribe(res=>{
      console.info(res)
    })

    let promise = new Promise((resolve,reject)=>{
      console.info('promise')
      resolve('123')
    })

    promise.then(res=>{
      console.info(res)
    })

  }

  ob$ = new Observable((observer)=>{
    console.info(111111)
    observer.next(111)
  });

  color:string

  userInfo={
    name:'mcj',
    age:20
  }

  home:string = 'mcj'

  changeHome(){
    this.home = 'cl';
  }

}
