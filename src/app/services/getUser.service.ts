
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as serviceUrls from "../shared/commons/service-url";
import { environment } from "../../environments/environment";

/**
 * @author - Snehal Dhane
 * User service contains http services related to user operations
 */
@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  public httpOptions;

  constructor(private http: HttpClient) {
    // let token = localStorage.getItem("token");
    let token  //your token
    if (token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": token
        })
      };
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log("Service error:",error);
     // you can show error message here
     // if u want to show it in component no need to write catchError
      return of(result as T);
    };
  }

  /**
   * GET :get all users
   */
  // D:\rashmi\Angular 6\Angular6 template\angular6-template\src\app\shared
  getUsers() {
    return this.http
      .get('assets/jsonData/getUsers.json').pipe(
          catchError(this.handleError<any>('get all users error'))
        );
  }
}












