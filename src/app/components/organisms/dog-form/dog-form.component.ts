import { Component, OnInit } from '@angular/core';
import { OwnerDogService } from '../../../services/owner-dog.service';
import { Dog } from '../../../models/dog.model';
import { Owner } from '../../../models/owner.model';
import {OwnerSelectComponent} from "../../molecules/owner-select/owner-select.component";
import {FormFieldComponent} from "../../molecules/form-field/form-field.component";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css'],
  imports: [
    OwnerSelectComponent,
    FormFieldComponent
  ],
  standalone: true
})
export class DogFormComponent implements OnInit {
  dog: Dog = {
    id: 0,
    ownerId: 0,
    name: '',
    age: 0,
    breed: '',
    sex: '',
    color: ''
  };

  owners: Owner[] = [];

  // Getter y Setter para manejar age como string en el template
  get dogAge(): string {
    return this.dog.age.toString();
  }

  set dogAge(value: string) {
    this.dog.age = Number(value);
  }

  constructor(private ownerDogService: OwnerDogService) {}

  ngOnInit() {
    // Cargar la lista de dueños desde el servicio
    this.owners = this.ownerDogService.getOwners();
  }

  onSubmit() {
    console.log('Dog to be registered:', this.dog);  // Verificar que ownerId está correcto
    this.ownerDogService.addDog(this.dog);  // Guardar el perro en el servicio
    console.log('Dog registered:', this.dog);
  }


  resetForm() {
    this.dog = {
      id: 0,
      ownerId: 0,
      name: '',
      age: 0,
      breed: '',
      sex: '',
      color: ''
    };
  }
}
