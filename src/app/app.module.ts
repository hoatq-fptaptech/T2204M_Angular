import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {CurrentweatherComponent} from "./currentweather/currentweather.component";
import {HttpClientModule} from "@angular/common/http";
import {ForecastweatherComponent} from "./forecastweather/forecastweather.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    CurrentweatherComponent,
    ForecastweatherComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
