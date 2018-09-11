import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/userModel';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  public userModel: UserModel = new UserModel();
  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    console.log('userModel', this.userModel);
  }
}
