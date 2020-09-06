import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: SignUpComponent;
  let locationMock: any;
  let userService: UserService;
  let formBuilderMock: FormBuilder;
  let routerMock: any;

  beforeEach(() => {
    routerMock = jest.fn();
    locationMock = jest.fn();
    formBuilderMock = new FormBuilder();
		fixture = new SignUpComponent(
      locationMock,
      userService,
      formBuilderMock,
      routerMock,
		);
		fixture.ngOnInit();
  });

  it('should initialize signupForm', () => {
    const signupForm = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: ''
    };
    expect(fixture.signupForm.value).toEqual(signupForm);
  });

  it('should invalidate the signupForm', () => {
    fixture.signupForm.controls.username.setValue('');
    fixture.signupForm.controls.password.setValue('');
    fixture.signupForm.controls.firstname.setValue('');
    fixture.signupForm.controls.lastname.setValue('');
    fixture.signupForm.controls.email.setValue('');
    expect(fixture.signupForm.valid).toBeFalsy();
  });

  it('should validate the signupForm', () => {
    fixture.signupForm.controls.username.setValue('admin');
    fixture.signupForm.controls.password.setValue('zaq1ZAQ!');
    fixture.signupForm.controls.firstname.setValue('Heena');
    fixture.signupForm.controls.lastname.setValue('Verma');
    fixture.signupForm.controls.email.setValue('heena@techspian.com');
    expect(fixture.signupForm.valid).toBeTruthy();
  });

  it('should not call register', () => {
    const formData = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: ''
    };
    expect(fixture.register(formData)).not.toHaveBeenCalled();
  });

  it('should call register', () => {
    const formData = {
      username: 'admin',
      password: 'zaq1ZAQ!',
      firstname: 'Heena',
      lastname: 'Verma',
      email: 'heena@techspian.com'
    };   
    expect(fixture.register(formData)).toHaveBeenCalled();
  });

});
