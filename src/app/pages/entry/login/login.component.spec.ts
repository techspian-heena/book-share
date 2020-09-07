import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DatashareService } from 'src/app/services/datashare.service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('LoginComponent', () => {
  const component: LoginComponent = null;
  let fixture: LoginComponent;
  let routerMock: any;
  let locationMock: any;
  let userServiceMock: any;
  const datashareService: DatashareService = null;
  let formBuilderMock: FormBuilder;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            data: {

            }
          },
        }),
        { provide: Router, useValue: mockRouter },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
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
  });

  it('should user', () => {
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
  });
});
