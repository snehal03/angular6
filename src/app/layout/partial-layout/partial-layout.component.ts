import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-partial-layout',
  templateUrl: './partial-layout.component.html',
  styleUrls: ['./partial-layout.component.css']
})
export class PartialLayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
