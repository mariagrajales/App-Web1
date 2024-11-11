import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TitleComponent } from '../../atoms/title/title.component';
import { LoginFormComponent } from '../../organisms/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [LoginFormComponent, TitleComponent, CommonModule],
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {} // Inyecta Router

  onFormSubmit(loginData: { username: string; password: string }): void {
    this.authService.login(loginData.username, loginData.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);

        // Guarda el token en localStorage
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
          console.log('Token guardado en localStorage');

          // Redirige a la página /dogs
          this.router.navigate(['/dogs']);
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
