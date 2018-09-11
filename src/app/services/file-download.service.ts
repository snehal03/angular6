import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

import * as serviceUrls from "../globals/service-url";
import { environment } from "../../environments/environment";
// import { UserModel } from "../models/userModel";

/**
 * User service contains http services related to user operations
 */@Injectable({
  providedIn: 'root',
})
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
      "X-AuthToken":
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJud2Fpa2FyQGFnc2Z0LmNvbSIsImF1ZGllbmNlIjoibW9iaWxlIiwicGFzcyI6IiQyYSQxMCRNZzd1aHdSOGtpL3gzZlp4alRnWUouMFhhZk5rRXZQUDRPWi54ZVpUeWNjQnhRSVl6SEdTeSIsImNyZWF0ZWQiOjE1MzY2NjgwODMwODF9.qfHQ70ysbGTsQVB8y7efxwkFDAD1lLgccbFd6ebeHxAHIahyF3QKG-fk4tm1mnp7x9vaEcUksEWzK0c1XN3NJw"
    };

    if (fileType != "CSV") {
      this.httpOptions = {
        headers: new HttpHeaders(headers),
        responseType: "blob"
      };
    } else {
      this.httpOptions = {
        headers: new HttpHeaders(headers)
      };
    }
    const body = {
      criteriaName: "date",
      range: {
        minimum: "2018-9-01",
        maximum: "2018-10-27"
      }
    };
console.log('httpOptions',this.httpOptions);
    return this.http
      .post<any>(
        "http://wazoo.trackwayz.com/wazooapi/downloadReport?fileType=XLS&partnerId=5b33b014c8ba7127efb79fa0",
        body,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("file download error ")));
  }
  //  return this.http
  //     .post<any>(environment.baseUrl + serviceUrls.dowanlodFile, this.httpOptions)
  //     .pipe(catchError(this.handleError<any>("file download error ")));
  // }
}
