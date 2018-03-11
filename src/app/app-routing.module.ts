import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { MainComponent } from './main/main.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'bingo', component: OptionsComponent },
];


@NgModule({
  exports: [RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
