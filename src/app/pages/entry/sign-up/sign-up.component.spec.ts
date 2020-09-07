import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroupDirective, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SignUpComponent', () => {

  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  let userMock: any;

  beforeEach(async(() => {
    formGroupDirective = {
      form: new FormGroup({})
    };
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      //  DynamicTestModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          initialState: {
            data: {

            }
          },
        }),
        { provide: UserService, useValue: userMock },
        { provide: FormGroupDirective, useValue: formGroupDirective },
        { provide: FormBuilder, useValue: formBuilder }

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*  let component: SignUpComponent;
  let fixture: SignUpComponent;
  let userServiceMock: any;
  let formBuilderMock: FormBuilder;
  let routerMock: any;

  beforeEach(() => {
    userServiceMock = {
      addUser: jest.fn()
    };
    routerMock = jest.fn();
    formBuilderMock = new FormBuilder();
    fixture = new SignUpComponent(
      userServiceMock,
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
    fixture.register(formData);
    expect(userServiceMock.addUser).not.toHaveBeenCalled();
  });

  it('should call register', () => {
    const formData = {
      username: 'admin',
      password: 'zaq1ZAQ!',
      firstname: 'Heena',
      lastname: 'Verma',
      email: 'heena@techspian.com'
    };
    fixture.register(formData);
    expect(userServiceMock.addUser).toHaveBeenCalled();
  });*/

});
