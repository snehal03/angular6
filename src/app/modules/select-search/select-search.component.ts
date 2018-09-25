import { Component, OnInit, ViewChild } from "@angular/core";
import { SearchComponent } from "../../shared/modules/search/search.component";

@Component({
  selector: "app-select-search",
  templateUrl: "./select-search.component.html",
  styleUrls: ["./select-search.component.css"]
})
export class SelectSearchComponent implements OnInit {
  @ViewChild(SearchComponent)
  public search: SearchComponent;
  public searchText = "";
  public userData: any = [];
  public expandCollapse = true;

  constructor() {}

  ngOnInit() {
    this.userData = [
      {
        id: "1",
        name: "Snehal"
      },
      {
        id: "2",
        name: "Akshay"
      },
      {
        id: "3",
        name: "Shekhar"
      },
      {
        id: "4",
        name: "Ankita"
      },
      {
        id: "5",
        name: "Rashmi"
      },
      {
        id: "6",
        name: "Komal"
      }
    ];
  }

  changed($event) {
    let message = $event;
    if (message != undefined) {
      alert("Searched text: "+ message);
    }
  }

  userSelectionChanged(id) {
    if (id != undefined) {
      alert("Selected user id: "+ id)
    }
  }

}
