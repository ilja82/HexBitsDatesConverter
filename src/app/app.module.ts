import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitsToHexPipe } from './bits-to-hex.pipe';
import { CalendarComponent } from './calendar/calendar.component';
import { NumberUtilsService } from 'app/number-utils.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule} from '@angular/material';
import {CalendarModule} from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    BitsToHexPipe,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CalendarModule.forRoot()
  ],
  providers: [NumberUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
