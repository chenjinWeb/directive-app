import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators';

@Component({
  selector: 'mcj-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*const myObservable = of(1,2,3)
    const myObserver = {
      next:(value)=>{console.info(value)},
      error:(err)=>{console.info(err)},
      complate:()=>{console.info('complate')}
    }
    myObservable.subscribe(myObserver)*/

    /*let sequence = new Observable(this.sequenceSubscriber)
    let aa = sequence.subscribe({
      next:(value)=>{console.info(value)}
    })
    aa.unsubscribe()*/

    const oDiv = document.querySelector('div1');

    this.fromEvent(oDiv,'click').subscribe(res=>{
      console.info(res)
    })

  }

  sequenceSubscriber(observer){
    observer.next(1);
    observer.next(2);
    observer.next(3);
    return {
      unsubscribe:()=>{}
    }
  }

  fromEvent(target,eventName){

    return new Observable((observer)=>{
      /*target.addEventListener(eventName,(e)=>{
        observer.next(e)
      })*/
    })

  }



}
