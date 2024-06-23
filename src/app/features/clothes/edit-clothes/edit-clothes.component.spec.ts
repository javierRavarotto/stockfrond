import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClothesComponent } from './edit-clothes.component';

describe('EditClothesComponent', () => {
  let component: EditClothesComponent;
  let fixture: ComponentFixture<EditClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditClothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
