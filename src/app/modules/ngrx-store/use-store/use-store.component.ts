import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { GetUserService } from '../../../services/getUser.service';
import {Observable} from 'rxjs';
import {USERS} from '../stateManager/stateMgr';

@Component({
  selector: 'app-use-store',
  templateUrl: './use-store.component.html',
  styleUrls: ['./use-store.component.css']
})
export class UseStoreComponent implements OnInit {

  constructor(private getUserService: GetUserService, private store: Store<any>) { }

  ngOnInit() {
    this.getUsers();
  }


  // ******* services***********
getUsers() {
  this.getUserService.getUsers().subscribe((data) => {

    console.log(data);
    this.dispatchUserData(data);

  } , (error) => {

  });
}

// ******** store dispatchers**********
dispatchUserData(users: any) {
  this.store.dispatch({
    type: USERS,
    payload: {
      id: 1,
      users: users,
      completed: true
    }
  });
}
}
