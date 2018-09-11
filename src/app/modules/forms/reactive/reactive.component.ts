import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder ,Validators } from "@angular/forms";


@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"]
})
export class ReactiveComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl("",Validators.required),
  //   lastName: new FormControl(""),
  //   address: new FormGroup({
  //     street: new FormControl(""),
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     zip: new FormControl("")
  //   })
  // });


  profileForm = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["",[Validators.required]],
    address: this.fb.group({
      street: ["", [Validators.required]],
      city: ["",[Validators.required]],
      state: ["", [Validators.required]],
      zip: ["", [Validators.required]],
    })
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  resetForm(){
    this.profileForm.reset();
  }
}
