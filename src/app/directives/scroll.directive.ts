import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Input() appScroll;




  constructor() { }

}
