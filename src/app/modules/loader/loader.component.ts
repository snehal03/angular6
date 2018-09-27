import { Component, OnInit } from "@angular/core";
// import {SpinnerComponent} from '../../shared/modules/spinner/spinner.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit {
  show = true;
  spinnerType: any;

  constructor(private spinner: NgxSpinnerService) {

  }

  ngOnInit() {

  }

  showSpinner(spinnerName){

    this.spinnerType = spinnerName;
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }
}
