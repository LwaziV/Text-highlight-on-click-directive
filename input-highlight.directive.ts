import { Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({ selector: '[input-highlight]'})
export class InputHighlight {
  el: ElementRef;
  observer: any;

  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
  }

  @HostListener('focus')
  onFocus() {
    if (!!this.el.nativeElement.value)
      this.el.nativeElement.select();
  }
}
