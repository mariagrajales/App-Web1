import { Component } from '@angular/core';
import { DogListComponent } from '../../organisms/dog-list/dog-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.css'],
  standalone: true,
  imports: [DogListComponent, CommonModule]
})
export class DogsPageComponent {}
