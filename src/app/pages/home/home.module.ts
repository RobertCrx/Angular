
import { CustomComponent } from './../custom/custom.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from 'src/app/material-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedComponent } from './advanced/advanced.component';
import { CovidComponent } from './advanced/covid/covid.component';
import { TextChangeDirective } from 'src/app/directives/text-change.directive';
import { CustomDirective } from 'src/app/directives/custom.directive';
import { ScrollDirective } from 'src/app/directives/scroll.directive';



@NgModule({
  declarations: [CustomComponent, AdvancedComponent, CovidComponent, TextChangeDirective, CustomDirective, ScrollDirective],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
