import { Component } from '@angular/core';
interface boxContent{
  content: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent{

  title = 'SlackBingo';

  constructor(){}
}
