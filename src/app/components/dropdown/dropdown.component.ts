import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { IOption } from 'src/app/models/Option';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  imports: [NgbDropdownModule, CommonModule],
  standalone: true,
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: IOption[];
  @Input() open: boolean;
  @Output() selected = new EventEmitter<string>();

  onSelect(id: string) {
    this.selected.emit(id);
  }
}
