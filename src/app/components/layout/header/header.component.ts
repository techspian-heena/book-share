import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isToggle = false;

  constructor(
    private themeService: ThemeService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  changeValue(value): void {
   if (value === 'dark') {
     this.themeService.toggleDark();
   } else {
     this.themeService.toggleLight();
   }
  }

  openDropdown(): void {
    this.isToggle = !this.isToggle;
  }

  logIn(): void {
    this.router.navigate(['./entry/login']);
  }

  signUp(): void {
    this.router.navigate(['./entry/sign-up']);
  }

}
