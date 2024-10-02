import { Component } from '@angular/core';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
  standalone: true,
  imports: [FormFieldComponent, ButtonComponent, CommonModule]
})
export class OwnerFormComponent {
  owner = {
    name: '',
    age: '',
    email: '',
    phone: ''
  };

  onSubmit() {
    console.log('Owner registered:', this.owner);
    // Aquí puedes añadir lógica para guardar al dueño en LocalStorage o en la base de datos.
  }
}
