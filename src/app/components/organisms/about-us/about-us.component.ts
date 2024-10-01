import { Component } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { ParagraphComponent } from '../../atoms/paragraph/paragraph.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [TitleComponent, ParagraphComponent]
})
export class AboutUsComponent {
  // Información a mostrar en la sección "Sobre Nosotros"
  title: string = 'Sobre Nosotros';
  content: string = 'Somos una veterinaria comprometida con el bienestar de tus mascotas. Nuestro equipo de profesionales está dedicado a brindar el mejor cuidado y servicio.';
}
