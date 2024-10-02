import { Component } from '@angular/core';
import { DogCardComponent } from '../../molecules/dog-card/dog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
  standalone: true,
  imports: [DogCardComponent, CommonModule]
})
export class DogListComponent {
  dogs = [
    { name: 'Rex', age: 4, breed: 'Labrador', color: 'Negro', owner: 'John Doe' },
    { name: 'Bella', age: 2, breed: 'Poodle', color: 'Blanco', owner: 'Jane Doe' },
    // Agregar más perros o cargarlos desde el almacenamiento local
  ];
}
