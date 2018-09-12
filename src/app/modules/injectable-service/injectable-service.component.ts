import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableService } from '../../services/observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-injectable-service',
  templateUrl: './injectable-service.component.html',
  styleUrls: ['./injectable-service.component.css']
})
export class InjectableServiceComponent implements OnInit , OnDestroy {

  subscription: Subscription;
  userEmail: any;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.getDataFromObservableService();
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribe service
     */
    this.subscription.unsubscribe();
  }

  getDataFromObservableService(){
    /**
     * Data sent fro app.component.ts
     * ex: -   this.observableService.sendData({ email:"snehal.dhane11@gmail.com" });
     * Subscribe for observable service , and get pushed data
     */
    this.subscription =  this.observableService.notifyObservable$.subscribe((res:any)=>{
        this.userEmail = res.email;
    })
  }

}
