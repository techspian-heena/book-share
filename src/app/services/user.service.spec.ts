import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let service: UserService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(
    inject([UserService, HttpTestingController], (serviceMock, http) => {
      service = serviceMock;
      httpMock = http;
    }));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Add Links', () => {
    const spy = jest.fn();
    const requestBody = {};
    service.addUser(requestBody).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndpoint}/users`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should fetch Links', () => {
    const spy = jest.fn();
    service.getUsers().subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndpoint}/users`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

});
