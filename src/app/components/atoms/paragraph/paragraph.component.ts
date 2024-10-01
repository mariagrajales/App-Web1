import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  standalone: true,
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {
  // Input property to customize the text content
  @Input() text: string = ''; // Default paragraph text is empty
}
