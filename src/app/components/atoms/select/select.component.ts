import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: Array<{ value: string, label: string }> = [];
  @Input() selectedValue: string | null = null;  // Permitir que `selectedValue` sea `null`
  @Output() selectedValueChange = new EventEmitter<string | null>(); // Permitir que el EventEmitter sea `string | null`

  // Funciones de control para Angular Forms
  private onChange = (value: string | null) => {};
  private onTouched = () => {};

  writeValue(value: string | null): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value === 'null' ? null : target.value;
    this.onChange(this.selectedValue);
    this.onTouched();
    this.selectedValueChange.emit(this.selectedValue);
  }

}
