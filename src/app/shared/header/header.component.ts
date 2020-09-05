import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isToggle: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  changeValue(value) {
   if (value === 'dark') {
     this.themeService.toggleDark();
   } else {
     this.themeService.toggleLight();
   }
  }

}
