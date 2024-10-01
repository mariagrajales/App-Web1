import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
