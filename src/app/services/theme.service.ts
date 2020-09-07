import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff'
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggleDark(): void {
    this.setTheme(darkTheme);
  }

  toggleLight(): void {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}): void {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
