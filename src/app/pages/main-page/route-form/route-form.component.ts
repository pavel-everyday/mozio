import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlLabeled } from 'src/app/models/FormControlLabeled';
import { IOption } from 'src/app/models/Option';
import { CitySuggest } from 'src/app/services/city-suggest.service';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss'],
})
export class RouteFormComponent implements OnInit {
  public form: FormGroup;
  public suggestionsList: IOption[][] = [];

  constructor(
    private fb: FormBuilder,
    private suggestionService: CitySuggest
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      places: new FormArray([
        new FormControlLabeled('foo', [Validators.required], 'City of origin'),
        new FormControlLabeled(
          'foo',
          [Validators.required],
          'City of destination'
        ),
      ]),
      passengers: new FormControlLabeled(
        '12',
        [Validators.required],
        'Passengers'
      ),
    });

    this.suggestionService.setDelay(300);
  }

  onAddField() {
    (this.form.controls['places'] as FormArray).push(
      new FormControlLabeled('', [], 'City of destination')
    );
  }

  get placesControls() {
    return (this.form.controls['places'] as FormArray<FormControlLabeled>)
      .controls;
  }

  get passengersControl(): FormControlLabeled {
    return this.form.controls['passengers'] as FormControlLabeled;
  }

  async onFiledInput(newValue: string, fieldIndex: number) {
    try {
      const suggestion = await this.suggestionService.suggest(newValue);
      this.suggestionsList[fieldIndex] = suggestion;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);

    //
  }
}
