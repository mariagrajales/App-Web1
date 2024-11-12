import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
  standalone: true,
  imports: [FormFieldComponent, ButtonComponent, CommonModule, InputComponent, ReactiveFormsModule]
})
export class OwnerFormComponent implements OnInit {
  ownerForm!: FormGroup; // Agrega el operador ! para decir que será inicializado en ngOnInit

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ownerForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.ownerForm.valid) {
      console.log('Owner registered:', this.ownerForm.value);
      // Lógica adicional para guardar al dueño en la base de datos o LocalStorage
    } else {
      console.log('Formulario inválido');
    }
  }
}
