import { CovidComponent } from './pages/home/advanced/covid/covid.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { CustomComponent } from './pages/custom/custom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialSharedModule } from './material-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdvancedComponent } from './pages/home/advanced/advanced.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextChangeDirective } from './directives/text-change.directive';
import { CustomDirective } from './directives/custom.directive';
import { ScrollDirective } from './directives/scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CustomComponent,
    AdvancedComponent,
    CovidComponent,
    TextChangeDirective,
    CustomDirective,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
