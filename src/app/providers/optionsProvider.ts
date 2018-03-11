import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OptionsProvider {

  constructor(private db: AngularFireDatabase){ }

  getOptions(){
    return this.db.object(`boxOptions/`).valueChanges();
  }
}
