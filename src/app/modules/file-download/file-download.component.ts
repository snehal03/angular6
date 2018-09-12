import { Component, OnInit, Input } from "@angular/core";
import { messages } from "../../shared/commons/validation.msgs";


/***
 * @author - Snehal Dhane
 * File Download Component
 */
@Component({
  selector: "app-file-download",
  templateUrl: "./file-download.component.html",
  styleUrls: ["./file-download.component.css"]
})
export class FileDownloadComponent implements OnInit {
  downloadFileButton = false;
  token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJud2Fpa2FyQGFnc2Z0LmNvbSIsImF1ZGllbmNlIjoibW9iaWxlIiwicGFzcyI6IiQyYSQxMCRNZzd1aHdSOGtpL3gzZlp4alRnWUouMFhhZk5rRXZQUDRPWi54ZVpUeWNjQnhRSVl6SEdTeSIsImNyZWF0ZWQiOjE1MzY2NjgwODMwODF9.qfHQ70ysbGTsQVB8y7efxwkFDAD1lLgccbFd6ebeHxAHIahyF3QKG-fk4tm1mnp7x9vaEcUksEWzK0c1XN3NJw";

  public fileDownloadForm: any = {};
  readonly msgs = messages;
  isFileTypeSelected = false;
  fileurlModel: any;
  file_typeModel: any;
  mimetypeModel: any;
  methodTypeModel: any;
  apiBodyModel: any;

  constructor() {}

  ngOnInit() {}
}
