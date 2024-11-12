import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../../molecules/testimonial-card/testimonial-card.component';
import { TitleComponent } from '../../atoms/title/title.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  standalone: true,
  imports: [TestimonialCardComponent, TitleComponent]
})
export class TestimonialsComponent {
  // Lista de testimonios
  testimonials = [
    {
      author: 'Juan Pérez',
      content: '¡Excelente servicio y atención a mis mascotas! Muy recomendados.',
      imageUrl: 'assets/images/juan.jpg'
    },
    {
      author: 'María García',
      content: 'El personal es muy profesional y amable. Mis mascotas están en buenas manos.',
      imageUrl: 'assets/images/maria.jpg'
    },
    {
      author: 'Carlos Ramírez',
      content: 'La mejor veterinaria que he visitado. Mis perros siempre reciben el mejor cuidado.',
      imageUrl: 'assets/images/carlos.jpg'
    }
  ];
}
