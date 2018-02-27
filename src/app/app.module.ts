import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'

import { AppComponent } from './app.component';
import { OptionsService } from './options.service';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
