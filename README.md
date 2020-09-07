# BookShare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via jest.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running json-server

Run `npm run json:server` to run json-server, you can perform CRUD operation on books and also get or add users.

## Running storybook

Run `npm run storybook` to run storybook. Navigate to ` http://localhost:6006/` , you will get stories for some components and also find different addon for storybook.

## Stories for storybook

Card
Footer

## App Components

HomeComponent   - Displays list of books in Home Page.

HeaderComponent - It is header of application. 
                  Contains application logo with title, Login & SignUp button and a dropdown to change the    theme of app in light  or dark.

FooterComponent - It is footer of application

CardComponent   - Displays the Book title, category name & image of category in a card.

## App Pages

LoginComponent      - It contains login form, when you logged in then render to result page.

SignUpComponent     - It contains registration form.

ResultPageComponent - Displays Book details. Contains ADD NEW & LOGOUT button. 
                      If user loggenIn as admin(username: admin, password: zaq1ZAQ!) user then he/she can see UPDATE & DELETE button otherwise they can only add new Books. 
                      
ActionComponent     - It is page from where user can add new book or update existing book depends on action.

## Reusable Component

CardComponent
ActionComponent

## Reusable Module

EntryModule

## Services

BookService       -  Service to perform CRUD operation on books API created by json-server.

DatashareService  -  Service to store the data.

ThemeService      -  Service to change the theme as dark or light

UserService       -  Service to get the users who has created account & to add new user.

## Interfaces

Book - Book model that includes id, title, category & description.

User - User model that includes username, password, firstname, lastname & email.

## State Management

Ngrx Store

--> book.actions.ts - It has enum of BookActionTypes

--> BookEffect - call bookservice from BookEffect

--> book.reducer.ts - It has interface AppState, BookState



## Book Sharing Application Allow
1.	public listing of books and their associated data
2.	option for user login and registration flow
3.	for logged in users CRUD flow for books and their info : only admin can delete or edit book.
                                                             (username: admin, password: zaq1ZAQ!)

To simplify initial dev flow I have used json-server to simulate REST APIs.

## As Expected:

1.	Build the app using latest Angular CLI - 10.0.8
2.	Use own markup and css for styling, use svg for images.
3.	Use NgRx for state management.
4.	Write unit tests for most of the components using Jest ->  Statements - 68.75%, Branches - 31.58%, Functions -                                                              48.61%,  Lines - 65.81%
5.	Checked that application is accessible.
6.	Write Storybook stories for card & footer component.
7.	Two themes for the app – light and dark which we can change from header
8.	Published code to GitHub with proper commit messages.


 

