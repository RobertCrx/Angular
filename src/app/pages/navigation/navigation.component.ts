import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, of } from 'rxjs';
import { BankAccount } from '../home/home.component';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // Observables + BehaviorSubject = async data;
  //===============================================
  homepageUsers$: Observable<BankAccount[]>;
  constructor() {

  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {

  }

  ngOnInit(): void {
  }

}
