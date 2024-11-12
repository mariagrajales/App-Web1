import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import { LabelComponent } from '../../atoms/label/label.component';
import { SelectComponent } from '../../atoms/select/select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-select',
  templateUrl: './owner-select.component.html',
  styleUrls: ['./owner-select.component.css'],
  standalone: true,
  imports: [LabelComponent, SelectComponent, CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OwnerSelectComponent),
      multi: true
    }
  ]
})
export class OwnerSelectComponent implements ControlValueAccessor {
  @Input() owners: Array<{ value: string, label: string }> = [];
  selectedOwner: string | null = null;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.selectedOwner = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedOwner = target.value;
    this.onChange(this.selectedOwner);
    this.onTouched();
  }
}
