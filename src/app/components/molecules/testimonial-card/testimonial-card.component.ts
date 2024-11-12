import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { ParagraphComponent } from '../../atoms/paragraph/paragraph.component';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css'],
  standalone: true,
  imports: [TitleComponent, ParagraphComponent, CommonModule]
})
export class TestimonialCardComponent {
  // Propiedad de entrada para el nombre del autor del testimonio
  @Input() author: string = 'Autor Anónimo';

  // Propiedad de entrada para el contenido del testimonio
  @Input() content: string = 'Este es un testimonio.';

  // Propiedad de entrada para la URL de la imagen del autor
  @Input() imageUrl: string = '';
}
