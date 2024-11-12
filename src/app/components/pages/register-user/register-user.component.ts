import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { TitleComponent } from "../../atoms/title/title.component";
import { UserFormComponent } from "../../organisms/user-form/user-form.component";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  standalone: true,
  imports: [TitleComponent, UserFormComponent],
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol_id: [null, Validators.required] // Inicializado en null para evitar valor preseleccionado
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log('Enviando datos del usuario:', userData);

      this.userService.registerUser(userData).subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente:', response);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
