import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'

import { AppComponent } from './app.component';
import { OptionsProvider } from './providers/optionsProvider';
import { OptionsComponent } from './options/options.component';
import { environment } from '../environments/environment';

export const firebaseConfig = environment.firebaseConfig;
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase,OptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
