import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColorsComponent } from './edit-colors.component';

describe('EditColorsComponent', () => {
  let component: EditColorsComponent;
  let fixture: ComponentFixture<EditColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
