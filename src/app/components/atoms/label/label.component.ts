import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  standalone: true
})
export class LabelComponent {
  @Input() text: string = '';
}
