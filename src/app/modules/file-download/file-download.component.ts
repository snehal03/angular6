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
  constructor(private userService: UserService, private fileDownloadUtility: FileDownloadUtility) { }

  ngOnInit() {

    this.fileDownloadForm.file_type = [ 'CSV', 'XLSL', 'PDF'];
    this.downloadFile('XLS');
  }
  onSubmit() {

    console.log('loginModel', this.fileDownloadForm);

  }


  downloadFile(type) {
    this.userService.downloadFIle(type)
        .subscribe(result => {
          if ((type).toUpperCase() == 'CSV'.toUpperCase()) {
            this.fileDownloadUtility.downloadCsv(result, 'filename');
          } else
            if ((type).toUpperCase() == 'XLS'.toUpperCase()) {
              this.fileDownloadUtility.downloadXlsxFile(result, 'filename');
            }


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
