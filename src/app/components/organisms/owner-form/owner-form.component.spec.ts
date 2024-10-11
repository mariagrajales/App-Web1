import { Component } from '@angular/core';
import { OwnerDogService } from '../../../services/owner-dog.service';  // Importar servicio
import { Owner } from '../../../models/owner.model';  // Importar el modelo

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
  standalone: true
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

  onSubmit() {
    this.ownerDogService.addOwner(this.owner);  // Guardar el dueño
    console.log('Owners after adding:', this.ownerDogService.getOwners());  // Verificar si el dueño tiene un id
    this.resetForm();  // Limpiar el formulario después de registrar
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
