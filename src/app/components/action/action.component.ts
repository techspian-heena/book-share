import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DatashareService } from 'src/app/services/datashare.service';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { Store } from '@ngrx/store';
import * as fromBook from "../state/book.reducer";
import * as bookActions from "../state/book.actions";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  title: string;
  category: string;
  description: string;
  id: number;

  constructor(
    private location: Location,
    private datashareService: DatashareService,
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit(): void {
    this.datashareService.getData()
      .subscribe(res => {
        if (res != null) {
          this.id = res.id
          this.title = res.title;
          this.category = res.category;
          this.description = res.description;
        }
      });
  }

  onSave() {
    const request: Book = {
      title: this.title,
      category: this.category,
      description: this.description
    };

    this.store.dispatch(new bookActions.CreateBook(request));
    this.location.back();
  }

  edit() {
    const request: Book = {
      id: this.id,
      title: this.title,
      category: this.category,
      description: this.description
    };
    this.store.dispatch(new bookActions.UpdateBook(request));
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}
