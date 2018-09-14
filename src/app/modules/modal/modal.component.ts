import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
  providers: [NgbModal]
})
/**
 * @author - Snehal Dhane
 * Component for Modal -
 * Contains open/close modal from html and typescript
 */
export class ModalComponent implements OnInit {
  closeResult: string;
  modalReference = null;

  /** get reference of modal */
  @ViewChild('content') modal : ElementRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  /**
   * Open Modal from typescript using modal reference
   */
  openModal(){
    this.open(this.modal);
  }

  /**
   * Open modal from html
   * @param content modal refrence from html
   */
  open(content) {
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic'});
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );

  }

  /**
   * Close Modal from typescript using reference of modalService
   */
  closeModal() {
    this.modalReference.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
