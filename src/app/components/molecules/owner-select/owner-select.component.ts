import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label.component';
import { SelectComponent } from '../../atoms/select/select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-select',
  templateUrl: './owner-select.component.html',
  styleUrls: ['./owner-select.component.css'],
  standalone: true,
  imports: [LabelComponent, SelectComponent, CommonModule]
})
export class OwnerSelectComponent {
  @Input() owners: Array<{ value: string, label: string }> = [];
  @Input() selectedOwner: string = '';
  @Output() selectedOwnerChange = new EventEmitter<string>();
}
