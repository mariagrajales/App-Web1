import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true
})
export class TitleComponent {
  // Input property to customize the title text
  @Input() text: string = 'Default Title'; // Título por defecto
  // Input property for HTML heading level (h1, h2, h3, etc.)
  @Input() level: number = 1; // Nivel del encabezado
}
