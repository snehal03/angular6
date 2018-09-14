import { Component, OnInit } from '@angular/core';
import { messages } from '../../shared/commons/validation.msgs';

/***
 * @author - Rashmi Ghatage
 * Login Component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly msgs = messages;
  public loginModel: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('loginModel', this.loginModel);
  }
}
