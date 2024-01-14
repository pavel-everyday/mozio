import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControlLabeled } from 'src/app/models/FormControlLabeled';
import { IOption } from 'src/app/models/Option';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  // imports: [DropdownComponent],
})
export class InputTextComponent {
  @Input() formField: FormControlLabeled;
  @Input() suggestions: IOption[];

  @Output() changed = new EventEmitter<string>();

  isNeedDropdown: boolean;

  onFieldChange(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.setValueToField(value);
    this.changed.emit(value);

    this.isNeedDropdown = true;
  }

  setValueToField(selectedId: string) {
    const value = this.suggestions.find(({ id }) => id === selectedId)?.label;
    if (value) {
      this.formField.setValue(value);
    }

    this.isNeedDropdown = false;
  }

  get isOpen() {
    return Boolean(this.isNeedDropdown && this.suggestions.length);
  }
}
