import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { environment } from 'src/environments/environment';

const mockBooks = [
  {
    id: 1,
    title: 'Percy Jackson',
    category: 'English',
    description: 'About to save camp half rode'
  },
  {
    id: 2,
    title: 'Mastering the Art of French Cooking',
    category: 'Cookbooks',
    description: 'It is for both seasoned cooks and beginners'
  }
];

const mockBook = {
  id: 3,
  title: 'The Testaments',
  category: 'Science',
  description: 'The Sequel to The Handmaid Tale'
};

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookService
      ]
    });
  });

  beforeEach(
    inject([BookService, HttpTestingController], (serviceMock, http) => {
      service = serviceMock;
      httpMock = http;
    }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllBooks: should return a book list', () => {
    service.getAllBooks().subscribe(books => {
      expect(books.length).toBe(2);
      expect(books[0].category).toBe('English');
    });

    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndpoint}/books`));
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(mockBooks);
    httpMock.verify();
  });

  it('addBook: should Add book', () => {
    const requestBody = { title: 'The Testaments' };
    service.addBook(requestBody).subscribe((book) => {
      expect(book[0].category).toEqual('Science');
    });
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndpoint}/books`));
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush(mockBook);
    httpMock.verify();
  });

  it('updateBook: should update books', () => {
    const spy = jest.fn();
    const requestBody = { id: 3, title: 'he Testaments' };
    service.updateBook(requestBody).subscribe((book) => {
      expect(book.category).toEqual('Science');
    });
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndpoint}/books/${requestBody.id}`));
    expect(mockReq.request.method).toEqual('PUT');
    mockReq.flush(mockBook);
    httpMock.verify();
  });

  it('deleteBook: should delete books', () => {
    const spy = jest.fn();
    service.deleteBook(3).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndpoint}/books/${3}`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith(true);
  });



});
