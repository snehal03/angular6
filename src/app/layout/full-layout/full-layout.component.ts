import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/**
 *  @author - Snehal Dhane
 * Full Layout component
 */
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
