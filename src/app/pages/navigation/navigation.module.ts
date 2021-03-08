import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialSharedModule } from 'src/app/material-shared.module';
import { HomeComponent } from '../home/home.component';
import { CustomComponent } from '../custom/custom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedComponent } from '../home/advanced/advanced.component';
import { CovidComponent } from '../home/advanced/covid/covid.component';
import { TextChangeDirective } from 'src/app/directives/text-change.directive';
import { CustomDirective } from 'src/app/directives/custom.directive';
import { ScrollDirective } from 'src/app/directives/scroll.directive';



@NgModule({
  declarations: [HomeComponent, CustomComponent, AdvancedComponent, CovidComponent, TextChangeDirective, CustomDirective, ScrollDirective],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
  ]
})
export class NavigationModule { }
