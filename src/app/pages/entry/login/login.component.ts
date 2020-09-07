import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { DatashareService } from 'src/app/services/datashare.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  isInValidUser: boolean;
  alertMsg: boolean;
  loginForm: FormGroup;
  isLoggedin: boolean;

  constructor(
    private location: Location,
    private userService: UserService,
    private datashareService: DatashareService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService.getUsers()
      .subscribe((res: User[]) => {
        if (res && res.length) {
          this.users = res;
        }
      });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  loginUser(formdata: any): void {
    this.isLoggedin = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (formdata.username != null && formdata.password != null) {
      const validUser = this.users.find(x => x.username === formdata.username && x.password === formdata.password);
      if (validUser != null) {
        this.datashareService.userInfo = validUser;
        this.router.navigate(['../result']);
      } else {
        this.isInValidUser = true;
        console.log('invalid username or password...please try again!!');
      }
    } else {
      this.alertMsg = true;
      console.log('please enter usename');
    }
  }

  cancel(): void{
    this.location.back();
  }
}
