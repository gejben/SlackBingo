import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../providers/userProvider';
import { OptionsProvider } from '../providers/optionsProvider';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NewUserComponent} from '../main/NewUser/newUser.component'
import { empty } from 'rxjs/Observer';

@Component({
  templateUrl: `main.component.html`,
  styleUrls: ["main.component.css"]
})
export class MainComponent implements OnInit {
  username;
  userList;
  selectedUser:string;
  userCount: number;
  constructor(private optionsProvider: OptionsProvider, private userProvider: UserProvider, public dialog: MatDialog) {}

  createNewUser() {
    let dialogRef =this.dialog.open(NewUserComponent, {
      height: '400px',
      width: '600px',
      data:{userNumber:this.userCount}
    });
  }

  login(){
    this.userProvider.login(this.selectedUser);
  }

  ngOnInit() {
      this.userProvider.getUserList()
      .subscribe( x=> {
        this.userList = x;
        if(this.userList instanceof Array)
        {
            this.userCount = this.userList.length;
        }
      })
    }
}
