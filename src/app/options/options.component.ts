import { Component, OnInit } from '@angular/core';
import { OptionsProvider } from '../providers/optionsProvider';

@Component({
  selector: 'app-options',
  templateUrl: 'options.component.html',
  styleUrls: ['options.component.css']
})
export class OptionsComponent implements OnInit {

  options: any;
  constructor(private optionsProvider: OptionsProvider) { }


  getOptions(): void{
    var input;
  this.optionsProvider.getOptions()
      .subscribe(x => {
        this.options = x;

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
        this.options = this.options.slice(0,16);
      })
  }

  // // -> Fisher-Yates shuffle algorithm
  // shuffleOptions(): void{
  //   var m = this.options.length;
  //   var t,i;
  //   // While there remain elemts to shuffle
  //   while(m){
  //     //pick remaining element
  //     i = Math.floor(Math.random() * m--);

  //     //and swap it with the current element.
  //     t = this.options[m];
  //     this.options[m] = this.options[i];
  //     this.options[i] = t;
  //   }
  //   this.options = this.options.slice(0,16);
  // }

  ngOnInit() {
    this.getOptions();
   // this.shuffleOptions();
  }

}
