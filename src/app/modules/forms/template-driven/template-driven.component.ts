import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/userModel';
import { messages } from '../../../shared/commons/validation.msgs';

/***
 * @author - Snehal Dhane
 * Template Driven Form Component
 */
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  readonly msgs = messages;
  public userModel: UserModel = new UserModel();
  constructor() { }

  ngOnInit() {
  }

// form submit method
  onSubmit() {
    console.log('userModel', this.userModel);
  }
}
