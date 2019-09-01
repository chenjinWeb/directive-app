import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SubjectService } from 'src/app/service/rx/subject.service';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'mcj-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.scss']
})
export class SubjectChildComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.missionAnnouncedSub.unsubscribe();
  }

  constructor(
    private subjectService:SubjectService
  ) {

  }

  missionAnnouncedSub:Unsubscribable;


  ngOnInit() {
    this.missionAnnouncedSub = this.subjectService.getMissionAnnouncedSource().subscribe(res=>{
      console.info(res)
      this.misson = res;
    })
  }

  @Input() astronaut:string;
  misson:string = '暂时没有任务'

}
