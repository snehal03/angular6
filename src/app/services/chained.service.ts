import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { forkJoin } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ChainedService {
  public httpOptions;

  constructor(private http: HttpClient) {
    // let token = localStorage.getItem("token");
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJud2Fpa2FyQGFnc2Z0LmNvbSIsImF1ZGllbmNlIjoibW9iaWxlIiwicGFzcyI6IiQyYSQxMCRNZzd1aHdSOGtpL3gzZlp4alRnWUouMFhhZk5rRXZQUDRPWi54ZVpUeWNjQnhRSVl6SEdTeSIsImNyZWF0ZWQiOjE1MzczMzcyOTQ0MDd9.l0rlsu6T2rpFvdnE8YL9ArQq9LxrOZlMmDzDcsJQeMIAJ_Yk6w-7T2HHL0ynCaXxMlzkIfdOIkfAL2276Yx_rg'; //your token
    if (token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: token
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
   * GET :callMultipleApis
   */
  callMultipleApis() {
    return forkJoin(
      this.http.get('http://wazoo.trackwayz.com/wazooapi/getUrlPattern',this.httpOptions),
      this.http.get("http://wazoo.trackwayz.com/wazooapi/getGlobalServiceCharge",this.httpOptions)
    ).pipe(  catchError(this.handleError<any>('callMultipleApis error ')));
  }
}
