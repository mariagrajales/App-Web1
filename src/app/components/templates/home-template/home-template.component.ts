import { Component } from '@angular/core';
import { AboutUsComponent } from '../../organisms/about-us/about-us.component';
import { TestimonialsComponent } from '../../organisms/testimonials/testimonials.component';
import { ContactUsComponent } from '../../organisms/contact-us/contact-us.component';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.css'],
  standalone: true,
  imports: [AboutUsComponent, TestimonialsComponent, ContactUsComponent]
})
export class HomeTemplateComponent {}
