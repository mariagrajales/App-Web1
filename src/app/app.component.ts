import { Component } from '@angular/core';
import { HeaderComponent } from './components/organisms/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet]
})
export class AppComponent {}
