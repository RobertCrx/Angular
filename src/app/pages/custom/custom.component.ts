import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  @Input() item$: Observable<any>; // decorate the property with @Input()


  constructor() { }

  ngOnInit(): void {

  }

}
