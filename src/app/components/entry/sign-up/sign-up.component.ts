import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  isRegisterd: boolean;

  constructor(
    private location: Location,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', [Validators.required]],
      lastname: ['', [ ]],
      email: ['', [Validators.required]]
  });
  }

  get formControl() { 
    return this.signupForm.controls; 
  }

  register() {

    this.isRegisterd = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.userService.addUser(this.signupForm.value)
    .subscribe((res: User[]) => {
      if (res) {
        this.router.navigateByUrl('login');
      }
    })
  }

  cancel() {
   this.location.back();
  }
}
