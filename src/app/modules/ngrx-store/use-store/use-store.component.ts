import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { GetUserService } from '../../../services/getUser.service';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-use-store',
  templateUrl: './use-store.component.html',
  styleUrls: ['./use-store.component.css']
})
export class UseStoreComponent implements OnInit {

  constructor(private getUserService: GetUserService) { }

  ngOnInit() {
    this.getUsers();
  }


getUsers() {
  this.getUserService.getUsers().subscribe((data) => {

    console.log(data);

  } , (error) => {

  });
}
}
