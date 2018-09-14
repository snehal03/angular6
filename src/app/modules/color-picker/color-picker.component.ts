import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
/**
 * @author - Snehal Dhane
 * COlor picker component used ngx-colorpicker
 */
export class ColorPickerComponent implements OnInit {

  public selectedColor: any;

  constructor() { }

  ngOnInit() {
  }

}
