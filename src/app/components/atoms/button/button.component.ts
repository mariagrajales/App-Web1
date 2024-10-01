import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Input properties to customize the button
  @Input() label: string = 'Button'; // Default label
  @Input() type: string = 'button'; // Button type (e.g., button, submit)
  @Input() disabled: boolean = false; // Disable the button

  // Output event emitter for click events
  @Output() onClick = new EventEmitter<Event>();

  // Method to handle button clicks
  handleClick(event: Event): void {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}
