import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/rx/subject.service';

@Component({
  selector: 'mcj-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor(
    private subjectService:SubjectService
  ) { }

  ngOnInit() {
  }

  astronauts = ['Lovell', 'Swigert', 'Haise'];

  messages=['打扫房间','打扫客厅','打扫卫生间'];

  messagesIndex:number = 0;

  //开始分发任务
  announce(){
    this.subjectService.announceMission(this.messages[this.messagesIndex++])
  }

}
