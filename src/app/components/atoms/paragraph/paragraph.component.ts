import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  standalone: true,
  styleUrls: ['./paragraph.component.css'],
  imports: [CommonModule]

})
export class ParagraphComponent {
  // Input property to customize the text content
  @Input() text: string = ''; // Default paragraph text is empty
}
