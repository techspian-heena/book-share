import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryRoutingModule } from './entry-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';;
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent, SignUpComponent],
    imports: [
      CommonModule,
      EntryRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ]
  })
  export class EntryModule { }