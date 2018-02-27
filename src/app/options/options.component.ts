import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-options',
  templateUrl: 'options.component.html',
  styleUrls: ['options.component.css']
})
export class OptionsComponent implements OnInit {

  options: string[];
  constructor(private optionService: OptionsService) { }


  getOptions(): void{
  this.optionService.getOptions()
      .subscribe(heroes => this.options = heroes);
  }

  // -> Fisher-Yates shuffle algorithm
  shuffleOptions(): void{
    var m = this.options.length;
    var t,i;
    // While there remain elemts to shuffle
    while(m){
      //pick remaining element
      i = Math.floor(Math.random() * m--);

      //and swap it with the current element.
      t = this.options[m];
      this.options[m] = this.options[i];
      this.options[i] = t;
    }
  }

  ngOnInit() {
    this.getOptions();
    this.shuffleOptions();
  }

}
