import { Component } from '@angular/core';
import { OwnerFormComponent } from '../../organisms/owner-form/owner-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css'],
  standalone: true,
  imports: [OwnerFormComponent, CommonModule]
})
export class RegisterOwnerComponent {}
