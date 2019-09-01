import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  private missionAnnouncedSource = new Subject<string>();

  announceMission(message){
    this.missionAnnouncedSource.next(message)
  }

  getMissionAnnouncedSource(){
    return this.missionAnnouncedSource.asObservable()
  }


}
