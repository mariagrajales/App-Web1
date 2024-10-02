import { Component, Output, EventEmitter } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [LogoComponent, ButtonComponent, CommonModule]
})
export class HeaderComponent {
  @Output() navigate = new EventEmitter<string>();

  onNavigate(route: string) {
    this.navigate.emit(route);
  }
}
