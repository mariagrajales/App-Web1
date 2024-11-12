import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import {HomeTemplateComponent} from "../../templates/home-template/home-template.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    HomeTemplateComponent
  ],
  standalone: true
})
export class HomePageComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // Guardar datos en `localStorage` cuando se carga la página
    this.localStorageService.setItem('welcomeMessage', 'Bienvenido a nuestra veterinaria');

    // Obtener datos de `localStorage`
    const message = this.localStorageService.getItem('welcomeMessage');
    console.log(message); // Salida: "Bienvenido a nuestra veterinaria"
  }
}
