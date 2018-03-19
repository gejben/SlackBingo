import { Component, Inject } from '@angular/core';
import { UserProvider } from '../../providers/userProvider';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector:'main.component',
  templateUrl: `newUser.component.html`,
  styleUrls: []
})
export class NewUserComponent {
  username;
  constructor( private userProvider: UserProvider,
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  createNewUser() {
      this.userProvider.createNewUser(this.username,this.data.userNumber)
      this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }


}
