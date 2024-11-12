import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsPageComponent } from './dogs-page.component';

describe('DogsPageComponent', () => {
  let component: DogsPageComponent;
  let fixture: ComponentFixture<DogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
