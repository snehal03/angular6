import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastMessagesComponent implements OnInit {

  messages: any = [];
  messageIndex = [];
  toasterTimeout = 1500;
  toasterTimeoutRef;
  errorMessage;
  uid = 0;
  toasterData;

  errorCount = 0;
  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.toast.messageObservable$.subscribe((data) => {
    this.toasterData = data;
        if (data.style == 'danger' || data.style == 'warning' ) {
          this.messages.push(data);
          this.errorCount += 1;
        } else {
          data['uid'] = this.uid;
          this.messages.push(data);
          this.clearTimer(this.uid);
        }
    });

  }

  clearTimer(uid) {

    this.toasterTimeoutRef = setTimeout((id) => {

        for (let dataIndex in this.messages) {
          if (this.messages[dataIndex].uid == id) {
            this.messages.splice(dataIndex, 1 );
          }
        }

    }, this.toasterTimeout, uid);
  }


  dismiss(itemKey) {

    if(!(this.messages[itemKey].hasOwnProperty('uid'))) {
      this.errorCount -= 1 ;
    }
    this.messages.splice(itemKey, 1);
  }

}
