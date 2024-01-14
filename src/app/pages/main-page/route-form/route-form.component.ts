import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlLabeled } from 'src/app/models/FormControlLabeled';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss'],
})
export class RouteFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      places: new FormArray([
        new FormControlLabeled('foo', [Validators.required], 'City of origin'),
        new FormControlLabeled('foo', [Validators.required], 'City of destination'),
      ]),
      passengers: new FormControlLabeled('12', [Validators.required], 'Passengers'),
    });

    console.log('!!!', (this.form.controls['places'] as FormArray).controls)

    return;
  }

  onAddField() {
    (this.form.controls['places'] as FormArray).push(new FormControlLabeled('', [], 'City of destination'))
  }

  get placesControls() {
    return (this.form.controls['places'] as FormArray<FormControlLabeled>).controls
  }

  get passengersControl(): FormControlLabeled {
    return (this.form.controls['passengers'] as FormControlLabeled)
  }

  onSubmit() {
    console.log(this.form)
    console.log(this.form.value)

    //
  }
}
