import { Routes } from '@angular/router';
import { RegisterOwnerComponent } from './components/pages/register-owner/register-owner.component';
import {RegisterDogComponent} from "./components/pages/register-dog/register-dog.component";
import {DogsPageComponent} from "./components/pages/dogs-page/dogs-page.component";

export const appRoutes: Routes = [
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'register-dog', component: RegisterDogComponent },
  { path: 'dogs', component: DogsPageComponent },
  { path: '', redirectTo: 'register-owner', pathMatch: 'full' },
  { path: '**', redirectTo: 'register-owner' }
];
