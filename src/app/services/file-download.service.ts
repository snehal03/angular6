import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

import * as serviceUrls from "../globals/service-url";
import { environment } from "../../environments/environment";
// import { UserModel } from "../models/userModel";

/**
 * User service contains http services related to user operations
 */
@Injectable()
export class UserService {
  public httpOptions;

  constructor(private http: HttpClient) {
    // let token = localStorage.getItem("token");
    let token; //your token
    if (token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "X-AuthToken": token
        })
      };
    }
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log("Service error:", error);
      // you can show error message here
      // if u want to show it in component no need to write catchError
      return of(result as T);
    };
  }

  /** POST: download file */
  downloadFIle(fileType: any): Observable<Blob> {

    let headers = {
      "Content-Type": "application/json",
      "X-AuthToken": "token"
    };

    if(fileType!='CSV'){
      this.httpOptions = {
        headers: new HttpHeaders(headers),
        responseType: "blob"
      };
    }else {
      this.httpOptions = {
        headers: new HttpHeaders(headers),
      };
    }

   return this.http
      .post<any>(environment.baseUrl + serviceUrls.dowanlodFile, this.httpOptions)
      .pipe(catchError(this.handleError<any>("file download error ")));
  }
}
