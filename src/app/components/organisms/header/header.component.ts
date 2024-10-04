import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [LogoComponent, ButtonComponent, CommonModule]
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onNavigate(route: string) {
    this.router.navigate([route]);
  }
}
