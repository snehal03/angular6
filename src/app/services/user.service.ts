import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as serviceUrls from "../shared/commons/service-url";
import { environment } from "../../environments/environment";

/**
 * User service contains http services related to user operations
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
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
  getUsers() {
    return this.http
      .get(environment.baseUrl + serviceUrls.getAllUsers, this.httpOptions).pipe(
          catchError(this.handleError<any>('get all users error '))
        );
  }

   /** POST: add user */
   addUser(user: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + serviceUrls.addUser,user, this.httpOptions).pipe(
      catchError(this.handleError<any>('add user error '))
    );
  }

  /** UPDATE: update user */
  updateUser(user: any): Observable<any> {
    return this.http.put<any>(environment.baseUrl + serviceUrls.updateUser, this.httpOptions).pipe(
      catchError(this.handleError<any>('update user error '))
    );

  }



  /** DELETE: delete user */
  deleteUser(user: any): Observable<any> {
    return this.http.delete<any>(environment.baseUrl + serviceUrls.updateUser, this.httpOptions).pipe(
      catchError(this.handleError<any>('delete user error '))
    );

  }
}
