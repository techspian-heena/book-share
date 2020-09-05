import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        BookService
      ]
    });
  });

  beforeEach(
    inject([BookService, HttpTestingController], (_service, _httpMock) => {
      service = _service;
      httpMock = _httpMock;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
