import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/userModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginModel: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('loginModel', this.loginModel);
  }
}
