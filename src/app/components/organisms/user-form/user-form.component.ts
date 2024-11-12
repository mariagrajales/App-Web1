import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormFieldComponent} from "../../molecules/form-field/form-field.component";
import {InputComponent} from "../../atoms/input/input.component";
import {SelectComponent} from "../../atoms/select/select.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [
    FormFieldComponent,
    InputComponent,
    SelectComponent,
    ReactiveFormsModule
  ],
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() userForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  roles = [
    { value: '1', label: 'Veterinario' },
    { value: '2', label: 'Dueño' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.userForm) {
      this.userForm = this.fb.group({
        nombre: ['', Validators.required],
        apellidoP: ['', Validators.required],
        apellidoM: ['', Validators.required],
        edad: ['', [Validators.required, Validators.min(18)]],
        phone: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rol_id: [null, Validators.required] // Inicializamos en null
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log("Formulario válido en UserFormComponent");
      this.formSubmit.emit();
    } else {
      console.log("Formulario inválido en UserFormComponent");
      console.log(this.userForm.value);
    }
  }

}
