import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  panelOpenState = false;

  public covidStats: any;
  public covidStats$: Observable<any>;


  constructor(private mainService: MainService) { }

  ngOnInit(): void {

    this.showStatsObservables();
    this.showStatsSubscribe();
  }



  // getting covid data - Observables;
  showStatsObservables() {
    this.covidStats$ = this.mainService.getCovid();
  }

  // getting covid data - Subscribe;
  showStatsSubscribe() {
    this.mainService.getCovid().subscribe((data: any) => {
      console.log(data);
    })
  }
}
