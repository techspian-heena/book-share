import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { DatashareService } from 'src/app/services/datashare.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() book: Book;

  @Input()
  storybookColor: 'gray' | 'blue' | 'violet';

  categories: any;


  constructor(private datashareService: DatashareService) {
  }

  ngOnInit(): void {
    if (this.book != null) {
      this.setCategories(this.book);
      this.categories = {
        history: this.datashareService.historyBooks,
        horror: this.datashareService.horrorBooks,
        cook: this.datashareService.cookBooks,
        comic: this.datashareService.comicBooks,
        science: this.datashareService.scienceBooks,
        other: this.datashareService.otherBooks
      };
      console.log(this.categories);
    }
  }

  public get classes(): string[] {
    return [`${this.storybookColor}`];
  }

  setCategories(book: Book) {
    switch (book.category) {
      case 'Historical Fiction':
        this.datashareService.historyBooks.push(book);
        break;
      case 'Horror':
        this.datashareService.horrorBooks.push(book);
        break;
      case 'Cookbooks':
        this.datashareService.cookBooks.push(book);
        break;
      case 'Comic':
        this.datashareService.cookBooks.push(book);
        break;
      case 'Science':
        this.datashareService.scienceBooks.push(book);
        break;
      default:
        this.datashareService.otherBooks.push(book);
        break;
    }
  }
}
