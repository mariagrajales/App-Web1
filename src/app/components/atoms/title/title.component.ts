import {Component, Input, numberAttribute} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TitleComponent {
  // Input property to customize the title text
  @Input() text: string = 'Default Title'; // Título por defecto
  // Input property for HTML heading level (h1, h2, h3, etc.)
  @Input({transform: numberAttribute}) level: number = 1; // Nivel del encabezado
}
