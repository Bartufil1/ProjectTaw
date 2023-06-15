import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDyrektywa]',
})
export class DyrektywaDirective {
  constructor(private element: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onMouseLave() {
    this.element.nativeElement.style.color = 'black';
  }
  // dekorator
}
