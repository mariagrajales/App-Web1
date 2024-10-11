import { Component } from '@angular/core';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { OwnerDogService } from '../../../services/owner-dog.service';  // Importa el servicio
import { Owner } from '../../../models/owner.model';  // Importa el modelo Owner

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
  standalone: true,
  imports: [FormFieldComponent, ButtonComponent, CommonModule]
})
export class OwnerFormComponent {
  owner: Owner = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: ''
  };

  constructor(private ownerDogService: OwnerDogService) {}

  // Getter y setter para convertir el valor de edad entre string y number
  get ownerAge(): string {
    return this.owner.age.toString();  // Convertimos el número a string para el input
  }

  set ownerAge(value: string) {
    this.owner.age = Number(value);  // Convertimos el valor de input (string) a number
  }

  onSubmit() {
    this.ownerDogService.addOwner(this.owner);  // Agregar el dueño al servicio
    console.log('Owners after adding:', this.ownerDogService.getOwners());  // Verificar que el id se asignó correctamente
    this.resetForm();  // Limpiamos el formulario después de registrar
  }

  resetForm() {
    this.owner = {
      id: 0,
      name: '',
      age: 0,
      email: '',
      phone: ''
    };
  }
}
