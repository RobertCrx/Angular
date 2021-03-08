import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  @Input() color = 'rgb(0,0,0)';
  @Input() isAuto = false;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.changeColor();



  }



  changeColor() {
    return new Promise<void>((resolve, reject) => {
      this.color = 'rgb(' + Math.round(Math.random() * 200) + ',' + Math.round(Math.random() * 100) + ',' + Math.round(Math.random() * 150) + ');';

      this._snackBar.open("Color has changed to " + this.color, "Close", {
        duration: 2000,
        horizontalPosition: "center"
      });

      resolve();
    })

    // interval(1000).subscribe(() => {
    //   // this.changeDetector.detectChanges();

    //   this.color = 'rgb(' + Math.round(Math.random() * 200) + ',' + Math.round(Math.random() * 100) + ',' + Math.round(Math.random() * 150) + ');';
    // })



  }

}
