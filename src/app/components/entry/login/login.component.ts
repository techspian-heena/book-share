import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { DatashareService } from 'src/app/services/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  users: User[];
  isInValidUser: boolean;
  alertMsg: boolean;

  constructor(
    private location: Location,
    private userService: UserService,
    private datashareService: DatashareService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((res: User[]) => {
      if (res) {
        this.users = res;
      }
    });
  }

  login() {
   if (this.username != null && this.password != null) {
   var validUser = this.users.find(x => x.username === this.username && x.password === this.password);
   if (validUser!= null) {
     this.datashareService.userInfo = validUser;
     this.router.navigate(['../result']);
   } else {
    this.isInValidUser = true;
    console.log("invalid username or password...please try again!!")
   }
  } else {
    this.alertMsg = true;
    console.log("please enter usename");
  }
  }

  cancel() {
    this.location.back();
  }

 /* signIn(userName, password) {
  //  this.alert = false;
    console.log(this.username);
    if (userName != null && password != null) {
      if ((userName === 'admin' && password === 'zaq1ZAQ!') ||
        (userName === this.user.userName && password === this.user.password)) {
        let userInfo: User;
        if (userName === 'admin') {
          userInfo = {
            userName: 'admin',
            password: 'zaq1ZAQ!'
          };
        } else {
          userInfo = this.user;
        }
        this.datashareService.userInfo = userInfo;
        this.router.navigate(['../result']);
      } else {
        this.isWrongUser = true;
        console.log('wrong username or password');
      }
    } else {
      this.isRequired = true;
      console.log('you must enter username');
    }

  }*/

}
