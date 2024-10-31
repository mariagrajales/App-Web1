import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DogService } from '../../../services/dog.service';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import { OwnerSelectComponent } from '../../molecules/owner-select/owner-select.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css'],
  standalone: true,
  imports: [FormFieldComponent, OwnerSelectComponent, ButtonComponent, CommonModule, ReactiveFormsModule, InputComponent]
})
export class DogFormComponent implements OnInit {
  dogForm!: FormGroup;
  owners: Array<{ value: string; label: string }> = [];

  constructor(private fb: FormBuilder, private dogService: DogService) {}

  ngOnInit(): void {
    this.dogForm = this.fb.group({
      ownerId: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      breed: ['', Validators.required],
      sex: ['', Validators.required],
      color: ['', Validators.required]
    });

    // Cargar dueños desde el backend
    this.dogService.getOwnersByRole().subscribe((response) => {
      this.owners = response.map((owner: any) => ({
        value: owner.id.toString(),
        label: `${owner.nombre} ${owner.apellidoP} ${owner.apellidoM}`
      }));
    });
  }

  onSubmit(): void {
    if (this.dogForm.valid) {
      const dogData = {
        userId: this.dogForm.value.ownerId,
        name: this.dogForm.value.name,
        edad: this.dogForm.value.age,
        raza: this.dogForm.value.breed,
        color: this.dogForm.value.color,
        sexo: this.dogForm.value.sex
      };

      this.dogService.registerDog(dogData).subscribe(
        (response) => {
          console.log('Perro registrado exitosamente:', response);
        },
        (error) => {
          console.error('Error al registrar perro:', error);
          console.log(this.dogForm.value);
        }
      );
    } else {
      console.log('Formulario inválido');
      console.log(this.dogForm.value);
    }
  }
}
