import { Component, OnInit } from '@angular/core';
import { DogService } from '../../../services/dog.service';
import { DogCardComponent } from '../../molecules/dog-card/dog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
  standalone: true,
  imports: [DogCardComponent, CommonModule]
})
export class DogListComponent implements OnInit {
  dogs: Array<{id: number; user_id: number; name: string; age: number; breed: string; color: string; sexo:string; owner: string }> = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getAllDogs().subscribe(
      (response) => {
        // Mapear los datos recibidos a la estructura que necesita el componente DogCardComponent
        this.dogs = response.map((dog: any) => ({
          id: dog.id,
          user_id: dog.user_id,
          name: dog.name,
          age: dog.edad,
          breed: dog.raza,
          color: dog.color,
          sexo: dog.sexo,
          owner: dog.owner, // Aquí puedes modificar según cómo quieras mostrar al dueño
        }));
      },
      (error) => {
        console.error('Error al cargar los perros:', error);
      }
    );
  }
}
