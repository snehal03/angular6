import {
  Component,
  OnInit,
  ViewChild,
  NgZone,
  ElementRef
} from "@angular/core";
import { AgmMap, MapsAPILoader } from "@agm/core";
import { FormControl } from "@angular/forms";
import {} from "@types/googlemaps";
@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.css"]
})
export class GoogleMapComponent implements OnInit {
  @ViewChild("AgmMap")
  public agmMap: AgmMap;
  public latitude: number;
  public longitude: number;
  public searchControl = "";
  public zoom: number;
  public currentAddress: string;
  private geoCoder;
  public componentForm = {
    street_number: "short_name",
    route: "long_name",
    locality: "long_name",
    administrative_area_level_1: "short_name",
    country: "long_name",
    postal_code: "short_name",
    administrative_area_level_2: "long_name"
  };

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.zoom = 15;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      // Fetch GeoCoder for reverse geocoding
      this.geoCoder = new google.maps.Geocoder();

      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["address"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;

          for (let i = 0; i < place.address_components.length; i++) {
            let addressType = place.address_components[i].types[0];
            if (this.componentForm[addressType]) {
              let val =
                place.address_components[i][this.componentForm[addressType]];
              //   document     .getElementById(addressType)     .value = val;
            }

            switch (addressType) {
              case "street_number":
                console.log(
                  "street_number" +
                    place.address_components[i][this.componentForm[addressType]]
                );
                break;

              case "route":
                console.log(
                  "route" +
                    place.address_components[i][this.componentForm[addressType]]
                );
                break;
              case "locality":
                console.log(
                  "locality" +
                    place.address_components[i][this.componentForm[addressType]]
                );
                break;
              case "administrative_area_level_1":
                console.log(
                  "administrative_area_level_1" +
                    place.address_components[i][this.componentForm[addressType]]
                );
                break;
              case "country":
                console.log(
                  "country" +
                    place.address_components[i][this.componentForm[addressType]]
                );
                break;
              case "postal_code":
                console.log(
                  "postal_code" +
                    place.address_components[i][this.componentForm[addressType]]
                );
                break;
              default:
                break;
            }
          }
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        window.dispatchEvent(new Event("resize"));
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event["coords"].lat;
    this.longitude = $event["coords"].lng;
    this.geoCoder.geocode(
      { location: { lat: this.latitude, lng: this.longitude } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === "OK") {
          if (results[0]) {
            this.currentAddress = results[0].formatted_address;
            alert("this.currentAddress----------" + this.currentAddress);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }
}
