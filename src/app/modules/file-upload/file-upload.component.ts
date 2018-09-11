import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent implements OnInit {
  files: FileList;
  image: any;
  imageFileName: string;

  constructor() {}

  ngOnInit() {}

  getFiles(event) {
    this.imageFileName = "";

    this.files = event.target.files;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.image = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);

    if (this.files && this.files[0]) {
      this.imageFileName = this.files[0].name;
      let img = this.files[0].size;
      let imgsize = img / 1024;

      let reader1 = new FileReader();
      reader1.onload = this._handleReaderLoaded.bind(this);
      reader1.readAsBinaryString(this.files[0]);

      console.log(this.files[0])
      /*
      this.files[0].contains single selcted file
      */
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    let base64textString = btoa(binaryString);
  }
}
