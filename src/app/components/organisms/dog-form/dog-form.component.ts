import { Component } from '@angular/core';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import { OwnerSelectComponent } from '../../molecules/owner-select/owner-select.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css'],
  standalone: true,
  imports: [FormFieldComponent, OwnerSelectComponent, ButtonComponent, CommonModule]
})
export class DogFormComponent {
  dog = {
    name: '',
    age: '',
    breed: '',
    sex: '',
    color: '',
    ownerId: ''
  };

  owners = [
    { value: '1', label: 'John Doe' },
    { value: '2', label: 'Jane Smith' },
    // Aquí se cargarán los dueños registrados desde el almacenamiento local
  ];

  onSubmit() {
    console.log('Dog registered:', this.dog);
    // Aquí puedes añadir lógica para guardar el perrito en LocalStorage
  }
}
