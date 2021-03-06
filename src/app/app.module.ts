import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    WeekComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
