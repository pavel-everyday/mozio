import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() version: 'default' | 'link' = 'default';
  @Input() disabled: boolean;
  @Input() wide: boolean;

  @HostBinding('class.wrapperWide') wrapperWide() {
    return this.wide;
  }
}
