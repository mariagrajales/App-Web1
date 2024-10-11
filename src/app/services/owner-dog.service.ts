import { Injectable } from '@angular/core';
import { Owner } from '../models/owner.model';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerDogService {
  private owners: Owner[] = [];  // No hay valores predefinidos, solo dueños registrados dinámicamente
  private dogs: Dog[] = [];

  addOwner(owner: Owner) {
    owner.id = this.owners.length + 1;
    this.owners.push(owner);
  }

  getOwners(): Owner[] {
    return this.owners;
  }

  addDog(dog: Dog) {
    dog.id = this.dogs.length + 1;
    this.dogs.push(dog);
  }

  getDogs(): Dog[] {
    return this.dogs;
  }
}
