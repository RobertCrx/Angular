import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appTextChange]'
})
export class TextChangeDirective {
  customColor = 'green';
  weight = 600;

  constructor(private el: ElementRef, private snackBar: MatSnackBar) {
    // el.nativeElement.style.backgroundColor = 'yellow';

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.customColor, this.weight);
    console.log(this.customColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }


  private highlight(color, weight) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.fontWeight = weight;
    let snackBarRef = this.snackBar.open('Directive applied to text', "Attribute Directive", {
      duration: 1000,
    });
  }

  @Input() appTextChange;

}
