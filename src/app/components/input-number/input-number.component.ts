import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControlLabeled } from 'src/app/models/FormControlLabeled';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent {
  maxAmount = 99;

  @Input() formField: FormControlLabeled;
  @ViewChild('input', { static: true }) inputRef: ElementRef;

  onFieldChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (Number(value) <= this.maxAmount) {
      this.formField.setValue((event.target as HTMLInputElement).value);
    } else {
      this.inputRef.nativeElement.value = this.formField.value;
    }
  }

  minus() {
    this.formField.setValue(this.formField.value - 1);
  }

  plus() {
    this.formField.setValue(+this.formField.value + 1);
  }
}
