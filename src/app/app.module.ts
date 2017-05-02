import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BitsToHexPipe} from './bits-to-hex.pipe';
import {NumberUtilsService} from 'app/number-utils.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BitsToHexPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [NumberUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
