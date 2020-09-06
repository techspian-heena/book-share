import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DatashareService } from 'src/app/services/datashare.service';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: LoginComponent;
  let routerMock: any;
  let locationMock: any;
  let userService: UserService;
  let datashareService: DatashareService;
  let formBuilderMock: FormBuilder;

  beforeEach(() => {
    routerMock = jest.fn();
    formBuilderMock = new FormBuilder();
    locationMock = jest.fn();
		fixture = new LoginComponent(
      locationMock,
      userService,
      datashareService,
      routerMock,
      formBuilderMock
		);
	//	fixture.ngOnInit();
  });
  
/*  it('should initialize loginForm', () => {
    const loginForm = {
      username: '',
      password: ''
    };
    expect(fixture.loginForm.value).toEqual(loginForm);
    expect()
  });*/

  it('should invalidate the loginForm', () => {
    fixture.loginForm.controls.username.setValue('');
    fixture.loginForm.controls.password.setValue('');
    expect(fixture.loginForm.valid).toBeFalsy();
  });

  it('should validate the loginForm', () => {
    fixture.loginForm.controls.username.setValue('admin');
    fixture.loginForm.controls.password.setValue('zaq1ZAQ!');
    expect(fixture.loginForm.valid).toBeTruthy();
  });

  it('should not call loginUser', () => {
    const formData = {
      username: '',
      password: ''
    };
    expect(fixture.loginUser(formData)).toBeFalsy();
  });

  it('should call loginUser', () => {
    const formData = {
      username: 'admin',
      password: 'zaq1ZAQ!'
    };   
    expect(fixture.loginUser(formData)).toBeTruthy();
  });
});
