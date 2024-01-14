import { FormControl, ValidatorFn } from '@angular/forms';

// to keep label near the input metadata, to get it easy in *ngFor loop

export class FormControlLabeled extends FormControl {
  label: string;

  constructor(value: string, validators: ValidatorFn[], label: string) {
    super(value, validators);

    this.label = label;
  }
}
