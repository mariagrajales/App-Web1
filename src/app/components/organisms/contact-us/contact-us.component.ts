import { Component } from '@angular/core';
import { ContactFormComponent } from '../../molecules/contact-form/contact-form.component';
import { TitleComponent } from '../../atoms/title/title.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [ContactFormComponent, TitleComponent]
})
export class ContactUsComponent {
  // Método que maneja el evento cuando se envía el formulario
  handleFormSubmit(formData: { name: string; email: string; message: string }) {
    console.log('Formulario enviado:', formData);
    // Aquí podrías agregar lógica para enviar el mensaje a un servidor o mostrar una notificación al usuario.
  }
}
