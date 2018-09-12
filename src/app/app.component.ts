import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * App componnet class
 */
export class AppComponent {
  title = 'angular6-template';

  /**
   * constructor
   * @param observableService observable service import
   */
  constructor(private observableService: ObservableService){
    /**
     * Send data to observable service with key 'email'
     */
    this.observableService.sendData({ email:"snehal.dhane11@gmail.com" });
  }
}
