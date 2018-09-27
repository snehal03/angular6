import { Component, OnInit, ViewChild } from "@angular/core";

import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {

  @ViewChild('tabset') public tabset: NgbTabset;
  selectedTab: string;

  constructor() {}

  ngOnInit() {
    this.selectedTab= 'secondTab';
  }

  public onTabChange($event: NgbTabChangeEvent) {
    if ($event.nextId === "firstTab") {
      // alert("first tab")
    } else if ($event.nextId === "secondTab") {
      // alert("second tab")
    }
  }
}
