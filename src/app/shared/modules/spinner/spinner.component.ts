import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
/**
 * @author - Snehal Dhane
 * Component for loader
 */
export class SpinnerComponent implements OnInit {

  @Input() show: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {

    if (changes.hasOwnProperty('show')) {
      // console.log("show.........",this.show)
    }
  }

}
