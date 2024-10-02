import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SelectComponent {
  @Input() options: Array<{ value: string, label: string }> = [];
  @Input() selectedValue: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  onSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedValueChange.emit(target.value);
  }
}
