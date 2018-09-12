import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/file-download.service';
import { FileDownloadUtility } from '../../globals/file-download';
import { messages } from '../../globals/validation.msgs';
@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {
  public fileDownloadForm: any = {};
  readonly msgs = messages;
  isFileTypeSelected = false;
  fileurlModel: any;
  file_typeModel: any;
  mimetypeModel: any;

  constructor(
    private userService: UserService,
    private fileDownloadUtility: FileDownloadUtility
  ) {}

  ngOnInit() {
    // this.file_type = [ 'CSV', 'XLSL', 'PDF'];
  }
  /**
   * Form submit method
   */
  onSubmit() {
      this.downloadFile(this.file_typeModel);

  }

  /**
   * Download file - csv/xls/pdf file
   * @param type file type
   */
  downloadFile(type) {
    this.userService.downloadFile(type).subscribe(
      result => {
        console.log('result', result);

        if (type.toUpperCase() == 'PDF'.toUpperCase()) {
          this.fileDownloadUtility.downloadPdf(result, 'filename');
        } else if (type.toUpperCase() == 'XLS'.toUpperCase()) {
          this.fileDownloadUtility.downloadXlsxFile(result, 'filename');
        } else if (type.toUpperCase() == 'CSV'.toUpperCase()) {
          this.fileDownloadUtility.downloadCsv(result, 'filename');
        }
      },
      error => {}
    );
  }

}
