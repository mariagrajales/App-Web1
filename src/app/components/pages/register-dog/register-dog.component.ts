import { Component } from '@angular/core';
import { DogFormComponent } from '../../organisms/dog-form/dog-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css'],
  standalone: true,
  imports: [DogFormComponent, CommonModule]
})
export class RegisterDogComponent {}
