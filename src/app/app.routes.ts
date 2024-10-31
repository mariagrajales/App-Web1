import { Routes } from '@angular/router';
import { RegisterOwnerComponent } from './components/pages/register-owner/register-owner.component';
import { RegisterDogComponent } from './components/pages/register-dog/register-dog.component';
import { DogsPageComponent } from './components/pages/dogs-page/dogs-page.component';
import { RegisterUserComponent } from './components/pages/register-user/register-user.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component'; // Nueva importación

export const appRoutes: Routes = [
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'register-dog', component: RegisterDogComponent },
  { path: 'dogs', component: DogsPageComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'login', component: LoginPageComponent }, // Ruta para la página de inicio de sesión
  { path: '', redirectTo: 'register-owner', pathMatch: 'full' },
  { path: '**', redirectTo: 'register-owner' }
];
