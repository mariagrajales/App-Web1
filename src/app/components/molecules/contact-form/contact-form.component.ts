import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ParagraphComponent } from '../../atoms/paragraph/paragraph.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [ButtonComponent, ParagraphComponent, FormsModule, CommonModule]
})
export class ContactFormComponent {
  // Propiedades para almacenar los valores de los campos del formulario
  name: string = '';
  email: string = '';
  message: string = '';

  // Evento de salida para manejar el envío del formulario
  @Output() formSubmitted = new EventEmitter<{ name: string; email: string; message: string }>();

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.name && this.email && this.message) {
      this.formSubmitted.emit({
        name: this.name,
        email: this.email,
        message: this.message,
      });

      // Limpiar los campos del formulario
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
