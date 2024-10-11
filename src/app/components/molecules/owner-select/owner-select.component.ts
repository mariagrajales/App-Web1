import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Owner } from '../../../models/owner.model';
import {LabelComponent} from "../../atoms/label/label.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-owner-select',
  templateUrl: './owner-select.component.html',
  styleUrls: ['./owner-select.component.css'],
  imports: [
    LabelComponent,
    NgForOf
  ],
  standalone: true
})
export class OwnerSelectComponent {
  @Input() owners: Owner[] = [];
  @Input() selectedOwner: number = 0;
  @Output() selectedOwnerChange = new EventEmitter<number>();

  onOwnerChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOwnerChange.emit(Number(target.value));  // Emitir como número
  }
}
