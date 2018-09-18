import { Component, OnInit } from '@angular/core';
import {SpinnerComponent} from '../../shared/modules/spinner/spinner.component';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  show = true;
  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this.show = false;
    },3000)
  }

}
