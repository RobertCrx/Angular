import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, forkJoin, from, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { MainService } from 'src/app/main.service';

const SERVER_URL = "http://localhost:4200";
var allUsers$ =
  [
    {
      index: 0,
      name: 'Robert',
      date: Date.now(),
      sum: 250.000,
      description: "Cineva cu multi bani , ar trebui sa avem foarte mare grija de el."
    },
    {
      index: 1,
      name: 'Adrian',
      date: Date.now(),
      sum: 50.000,
      description: "Ce cauta de fapt la noi? Nu vindem biciclete din cate stiu."
    },
    {
      index: 2,
      name: 'Alexandru',
      date: Date.now(),
      sum: 550.000,
      description: "Omul nostru din umbra , este un om deosebit de interesant."
    }

  ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class HomeComponent implements OnInit {
  // Observables + BehaviorSubject = async data;
  //===============================================

  userIndex: boolean = false;
  index: number;
  Loading: string;
  valueToChild: Observable<any> = new Observable<any>((observer) => {
    observer.next(`This string is transmited and received from parent to child`);
  });

  userAdd: FormGroup;
  newUserSubject = new BehaviorSubject<any[]>(null);
  addAnotherUser = new BehaviorSubject<any[]>(null);
  homepageUsers$: Observable<any[]> = this.newUserSubject.asObservable();
  addNew$: Observable<any[]> = this.addAnotherUser.asObservable();
  ceva = [];

  color = "rgb(250,0,0)";
  isAuto: boolean = false;

  enabled = "Enable auto?";
  disabled = "Disable auto?";
  @ViewChild('curtain') divCurtain: ElementRef;


  constructor(private changeDetector: ChangeDetectorRef, private _snackBar: MatSnackBar, private mainService: MainService, public dialog: MatDialog, private formBuilder: FormBuilder, private http: HttpClient) {

    this.newUserSubject.next(allUsers$);
    this.auto();

  }

  change() {
    this.isAuto = !this.isAuto;
    console.log(this.isAuto)

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    console.log(window.pageYOffset);
    this.divCurtain.nativeElement.style.top = window.pageYOffset.toString().concat('px');
  }


  auto() {
    console.log("Finding color...");

    interval(500).subscribe(() => {
      this.changeDetector.detectChanges();
      if (this.isAuto === true) {
        this.color = 'rgb(' + Math.round(Math.random() * 200) + ',' + Math.round(Math.random() * 100) + ',' + Math.round(Math.random() * 150) + ');';
        console.log("Color found! ", this.color);
        this._snackBar.open("Color has changed to " + this.color, "Close", {
          duration: 2000,
          horizontalPosition: "center"
        });
      }
    })
  }


  ngOnInit(): void {

    this.userAdd = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, Validators.required],
      sum: [null, Validators.required]
    });


    this.Loading = null;

    setTimeout(() => {
      this.Loading = "loaded";
    }, 1500)

  }


  submit() {
    console.log(this.userAdd.value)
    if (!this.userAdd.valid) {
      return
    }

    this.ceva.push(this.userAdd.value)
    // this.homepageUsers$ = forkJoin(of(allUsers$, this.userAdd.value))







  }

}

export interface BankAccount {
  name: string;
  date: any;
  sum: number;
  description: string;
  index: number;

}
