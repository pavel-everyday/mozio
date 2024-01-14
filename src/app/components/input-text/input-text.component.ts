import { Component, Input } from '@angular/core';
import { FormControlLabeled } from 'src/app/models/FormControlLabeled';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() formField: FormControlLabeled

  // constructor(){}

  onFieldChange(event: Event) {
    this.formField.setValue((event.target as HTMLInputElement).value)
  }
}
