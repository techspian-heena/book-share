import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DatashareService } from 'src/app/services/datashare.service';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroupDirective, FormGroup } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';

const fetchTeamStatsStub = {
  getUsers() {
      const todos = [
      ];
      return of(todos);
  }
};

describe('LoginComponent', () => {
 /* let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerMock: any;
  let locationMock: any;
  let userServiceMock: any;
  const userMock: any = null;
  const datashareService: DatashareService = null;
  let formBuilderMock: FormBuilder;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };*/
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  let userMock: any;
  let dataMock: any;
  let locationMock: any;

  beforeEach(async(() => {
    formGroupDirective = {
      form: new FormGroup({})
    };
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule
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
        { provide: DatashareService, useValue: dataMock },
        { provide: FormGroupDirective, useValue: formGroupDirective },
        { provide: FormBuilder, useValue: formBuilder },
        { provide: Location, useValue: locationMock }

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /* beforeEach(() => {
    userServiceMock = {
      getUsers: jest.fn()
    };
    routerMock = jest.fn();
    formBuilderMock = new FormBuilder();
    locationMock = jest.fn();
    fixture = new LoginComponent(
      locationMock,
      userServiceMock,
      datashareService,
      routerMock,
      formBuilderMock
    );
    fixture.ngOnInit();
  });*/

  /*it('should user', () => {
    spyOn(userServiceMock, 'getUsers');
    expect(userServiceMock.getUsers).toHaveBeenCalled();
});

  it('should initialize loginForm', () => {
    const loginForm = {
      username: '',
      password: ''
    };
    expect(fixture.loginForm.value).toEqual(loginForm);
  });

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

    expect({}).not.toHaveBeenCalled();
  });

  it('should call loginUser', () => {
    const formData = {
      username: 'admin',
      password: 'zaq1ZAQ!'
    };
    fixture.loginUser(formData);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../result']);
  });*/
});
