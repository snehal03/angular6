import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/file-download.service';
import {FileDownloadUtility} from '../../globals/file-download';
import { messages } from '../../globals/validation.msgs';
@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css'],

})

export class FileDownloadComponent implements OnInit {
public fileDownloadForm: any = {};
readonly msgs = messages;
isFileTypeSelected = false;
fileurlModel: any;
file_typeModel: any;
mimetypeModel: any;


  constructor(private userService: UserService, private fileDownloadUtility: FileDownloadUtility) { }

  ngOnInit() {

    // this.file_type = [ 'CSV', 'XLSL', 'PDF'];

  }
  onSubmit() {

    if(this.file_typeModel == 'CSV'){
      this.downloadCSVFile(this.file_typeModel);
    }else {
      this.downloadFile(this.file_typeModel);
    }
    console.log('loginModel', this.fileDownloadForm);

  }


  downloadFile(type) {
    this.userService.downloadPDF_XLSXFile(type)
        .subscribe(result => {
          console.log("result",result)

          if ((type).toUpperCase() == 'PDF'.toUpperCase()) {
            this.fileDownloadUtility.downloadPdf(result, 'filename');
          } else
            if ((type).toUpperCase() == 'XLS'.toUpperCase()) {
              this.fileDownloadUtility.downloadXlsxFile(result, 'filename');
            }


        },
        (error) => {

        });
  }

  downloadCSVFile(type) {
    this.userService.downloadCSVFile(type)
        .subscribe(result => {
            this.fileDownloadUtility.downloadCsv(result, 'filename');
        },
        (error) => {

        });
  }


  checkFileTypeSelection() {
    if (this.fileDownloadForm.file_type !== '' && this.fileDownloadForm.file_type !== undefined) {
      this.isFileTypeSelected = true;
    } else {
      this.isFileTypeSelected = false;
    }
  }
}
