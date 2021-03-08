import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BankAccount } from './pages/home/home.component';
import { map, tap } from 'rxjs/operators';
import { formatDate } from '@angular/common';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': "application/json"
})


@Injectable({
  providedIn: 'root'
})

export class MainService {

  private readonly covidAPI: string = "https://corona-api.com/countries";

  constructor(private http: HttpClient) {

  }

  getCovid(): Observable<any[]> {

    return this.http.get(this.covidAPI).pipe(
      map((res: any) => {

        return res.data
      })

    );
  }

}
