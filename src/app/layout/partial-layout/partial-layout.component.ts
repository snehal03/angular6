import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-partial-layout',
  templateUrl: './partial-layout.component.html',
  styleUrls: ['./partial-layout.component.css']
})
/**
 * @author - Snehal Dhane
 * Partial Layout component
 */
export class PartialLayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
