import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProvider {
    myHardcodedPassword = "Netrunner123";
    currentUser;
    constructor(private db: AngularFireDatabase, private dbAuth: AngularFireAuth) {
        this.dbAuth.authState.subscribe(x => {
            if (!x) {
                this.currentUser = null;
                return;
            }

            this.db.object(`users/${x.uid}`).valueChanges().subscribe(p => {
                this.currentUser = p;
                console.log(this.currentUser.username);
            })

        })
    }

    createNewUser(username: string, usernum:number) {
        var email = username+"@anr.se";
        this.dbAuth.auth.createUserWithEmailAndPassword(email, this.myHardcodedPassword).then((x) => {
            var userId = x.uid;
            var newUser = {
                username: username,
                createdUtc: new Date(Date.now()).toUTCString()
            };
            this.db.object(`users/${userId}`).set(newUser).then(p => {
                this.dbAuth.auth.signInWithEmailAndPassword(username, this.myHardcodedPassword);
            })
            this.db.object(`Userlist/${usernum}`).set(username)
        })
    }

    login(username:string)
    {
        var email = username+"@anr.se";
        this.dbAuth.auth.signInWithEmailAndPassword(email, this.myHardcodedPassword);
    }

    logout()
    {
        this.dbAuth.auth.signOut();
    }

    getUserList()
    {
        return this.db.object(`Userlist/`).valueChanges();
    }
    

}
