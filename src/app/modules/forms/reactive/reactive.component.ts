import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder ,Validators } from "@angular/forms";
import { messages } from '../../../globals/validation.msgs';

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
    profileForm: FormGroup;
    submitted = false;
    readonly msgs = messages;
    zipCodePattern = '^[0-9]{5,8}$';
    constructor(private formBuilder: FormBuilder) { }

  // profileForm = this.fb.group({
  //   firstName: ["", [Validators.required]],
  //   lastName: ["",[Validators.required]],
  //   address: this.fb.group({
  //     street: ["", [Validators.required]],
  //     city: ["",[Validators.required]],
  //     state: ["", [Validators.required]],
  //     zip: ["", [Validators.required]],
  //   })
  // });
  // constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // address: this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern(this.zipCodePattern)]],
    // })

    });
  }

  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;

    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);

    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
  }

  resetForm() {
    this.profileForm.reset();
  }
}
