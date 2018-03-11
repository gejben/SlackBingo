import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../providers/userProvider';
import { OptionsProvider } from '../providers/optionsProvider';

@Component({
  templateUrl: `main.component.html`,
  styleUrls: ["main.component.css"]
})
export class MainComponent implements OnInit {
  username;
  users;

  constructor(private optionsProvider: OptionsProvider, private userProvider: UserProvider) {

  }

  createNewUser() {
    this.userProvider.createNewUser(this.username);
  }

  ngOnInit() {
    if(!this.userProvider.currentUser)
    {
      var kuken =  this.userProvider.getUsers();
    }
  }

}
