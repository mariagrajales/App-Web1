import { Component, OnInit } from '@angular/core';
import { DogCardComponent } from '../../molecules/dog-card/dog-card.component';
import { CommonModule } from '@angular/common';
import { OwnerDogService } from '../../../services/owner-dog.service';  // Importamos el servicio
import { Dog } from '../../../models/dog.model';
import { Owner } from '../../../models/owner.model';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
  standalone: true,
  imports: [DogCardComponent, CommonModule]
})
export class DogListComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private ownerDogService: OwnerDogService) {}

  ngOnInit() {
    const owners: Owner[] = this.ownerDogService.getOwners();  // Obtener la lista de dueños
    this.dogs = this.ownerDogService.getDogs().map(dog => {
      const owner = owners.find(o => o.id === dog.ownerId);
      return {
        ...dog,
        owner: owner ? owner.name : 'Desconocido'  // Asigna el nombre del dueño o 'Desconocido' si no se encuentra
      };
    });
  }
}
