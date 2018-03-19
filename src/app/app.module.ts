import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'

import { AppComponent } from './app.component';
import { OptionsProvider } from './providers/optionsProvider';
import { OptionsComponent } from './options/options.component';
import { environment } from '../environments/environment';

import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import {MainComponent} from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const firebaseConfig = environment.firebaseConfig;
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserProvider } from './providers/userProvider';
import { MatDialog, MatDialogModule } from '@angular/material';
import { NewUserComponent } from './main/NewUser/newUser.component';


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    MainComponent,
    ToolbarComponent,
    NewUserComponent
  ],
  entryComponents: [NewUserComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [AngularFireDatabase,OptionsProvider,UserProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
