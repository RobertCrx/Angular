import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input() appCustom;

  constructor(private el: ElementRef, private snackBar: MatSnackBar) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.border = "2px solid green";
    this.el.nativeElement.style.transition = "border 0.3s ease-in";
    let snackBarRef = this.snackBar.open('Directive applied to the card!', "Attribute Directive", {
      duration: 1000,
    });
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.border = "none";
    this.el.nativeElement.style.transition = "border 0.3s ease-out";
    let snackBarRef = this.snackBar.open('Directive lost styles!', "Attribute Directive", {
      duration: 1000,
    });
  }


}
