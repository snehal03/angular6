import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-template';

  constructor(private observableService: ObservableService){
    this.observableService.sendData({ email:"snehal.dhane11@gmail.com" });
  }
}
