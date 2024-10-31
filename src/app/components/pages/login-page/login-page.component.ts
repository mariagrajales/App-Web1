import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TitleComponent } from '../../atoms/title/title.component';
import { LoginFormComponent } from '../../organisms/login-form/login-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [LoginFormComponent, TitleComponent, CommonModule],
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private authService: AuthService) {}

  onFormSubmit(loginData: { username: string; password: string }): void {
    this.authService.login(loginData.username, loginData.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);

        // Guarda el token en localStorage
        const token = response.token; // Ajusta según el nombre de la propiedad en la respuesta
        if (token) {
          localStorage.setItem('token', token);
          console.log('Token guardado en localStorage');
          // Opcional: Redirecciona a otra página si es necesario
        } else {
          console.error('No se recibió un token en la respuesta');
        }
      },
      (error) => {
        console.error('Error en el login:', error);
      }
    );
  }
}
