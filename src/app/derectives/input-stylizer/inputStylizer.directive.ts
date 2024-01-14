import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputStylizer]',
})
export class InputStylizerDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(element.nativeElement, 'app-input');
  }
}
