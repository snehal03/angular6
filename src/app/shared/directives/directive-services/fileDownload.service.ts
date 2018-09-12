import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

/**
 * File Download service contains http services related to File Download
 */
@Injectable({
  providedIn: "root"
})
export class FileDownloadService {
  public httpOptions;

  constructor(private http: HttpClient) {
    // let token = localStorage.getItem("token");
    let token; //your token
    if (token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: token
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

  /**
   * Dowanlod, xlsx, csv, pdf files from api
   * @param fileType type of file to download
   */
  downloadFile(url: any, method: any, apiBody: any, token:any): Observable<Blob> {
    let headers = {
      "Content-Type": "application/json",
      Authorization:token

    };

    this.httpOptions = {
      headers: new HttpHeaders(headers),
      observe: "response",
      responseType: "blob"
    };

    const body = apiBody;

    console.log("services----------",apiBody)
    if (method.toUpperCase() == "GET") {

      return this.http .get<any>(url,  this.httpOptions)
        .pipe(catchError(this.handleError<any>("file download error ")));

    } else if (method.toUpperCase() == "POST") {

      return this.http.post<any>(url, body, this.httpOptions)
        .pipe(catchError(this.handleError<any>("file download error ")));

    } else if (method.toUpperCase() == "PUT") {

      return this.http.put<any>(url, body, this.httpOptions)
        .pipe(catchError(this.handleError<any>("file download error ")));

    }
    console.log("httpOptions", this.httpOptions);
  }

}
