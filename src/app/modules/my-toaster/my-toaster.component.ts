import { Component, OnInit } from "@angular/core";
import { ToastService } from "../../shared/modules/toaster/toast.service";

@Component({
  selector: "app-my-toaster",
  templateUrl: "./my-toaster.component.html",
  styleUrls: ["./my-toaster.component.css"]
})
export class MyToasterComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit() {}

  showMessage(msgType) {
    switch (msgType) {
      case "success":
        this.toastService.success("This is Success Message");
        break;

      case "error":
        this.toastService.error("This is Error Message");
        break;

      case "info":
        this.toastService.info("This is Info Message");
        break;

      case "warning":
        this.toastService.warn("This is Warning Message");
        break;

      default:
        break;
    }
  }
}
