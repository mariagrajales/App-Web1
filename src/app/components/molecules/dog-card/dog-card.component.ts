import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DogCardComponent {
  @Input() dog: any;  // Recibe el objeto perro desde el componente padre
}
