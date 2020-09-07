import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { DatashareService } from 'src/app/services/datashare.service';
import { Book } from 'src/app/interfaces/book';
import { Store } from '@ngrx/store';
import * as fromBook from '../../store/book.reducer';
import * as bookActions from '../../store/book.actions';

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
          this.id = res.id;
          this.title = res.title;
          this.category = res.category;
          this.description = res.description;
        }
      });
  }

  onSave(): void {
    const request: Book = {
      title: this.title,
      category: this.category,
      description: this.description
    };

    this.store.dispatch(new bookActions.CreateBook(request));
    this.location.back();
  }

  edit(): void {
    const request: Book = {
      id: this.id,
      title: this.title,
      category: this.category,
      description: this.description
    };
    this.store.dispatch(new bookActions.UpdateBook(request));
    this.location.back();
  }

  cancel(): void {
    this.location.back();
  }

}
