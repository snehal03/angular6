import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  @ViewChild('AgmMap')  public agmMap: AgmMap
  public latitude: number;
  public longitude: number;
  public zoom;

  constructor() { }

  ngOnInit() {
    this.zoom = 15;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator
        .geolocation
        .getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
          window.dispatchEvent(new Event('resize'));
        });

    }
  }

}
