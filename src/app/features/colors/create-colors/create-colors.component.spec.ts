import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColorsComponent } from './create-colors.component';

describe('CreateColorsComponent', () => {
  let component: CreateColorsComponent;
  let fixture: ComponentFixture<CreateColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
