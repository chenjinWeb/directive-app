import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'mcj-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name=new FormControl('mcj')

  changeName(){
    this.name.setValue('cl')
  }

}
