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


  constructor() {
  }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    return [`${this.storybookColor}`];
  }

}
