import { Injectable } from "@angular/core";
// BehaviorSubject fro angular 6
import { BehaviorSubject } from "rxjs/BehaviorSubject";

/**
 * @author - Snehal Dhane
 * Service to notify local storage values
 */
@Injectable({
  providedIn: "root"
})
export class ObservableService {

  // craete object of BehaviorSubject
  private notify = new BehaviorSubject<any>("");

  // create observable service for BehaviorSubject object
  notifyObservable$ = this.notify.asObservable();

  constructor() {}

  /**
   * Store data in observable service
   * @param data data to store
   */
  sendData(data: any): void {
    console.log("ObservableService , data", data);
    this.notify.next(data);
  }
}
