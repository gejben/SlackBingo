import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Option} from '../option'
import {Tray} from '../tray'

@Injectable()
export class TrayProvider {

  constructor(private db: AngularFireDatabase){ }

  generateNewTray(userId: string):Tray {
    var newTray = new Tray();
        this.db.object(`trays/${userId}`).set(newTray).then(p => {
        });
    return newTray;
}


  getOptions(){
    return this.db.object(`boxOptions/`).valueChanges()
  }
}
