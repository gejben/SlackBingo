import { Injectable } from '@angular/core';
import { OPTIONS } from './mock-options';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OptionsService {

  constructor() { }

  getOptions():Observable<string[]>{
    return of(OPTIONS);
  }
}
