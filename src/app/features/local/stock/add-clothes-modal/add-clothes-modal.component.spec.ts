import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClothesModalComponent } from './add-clothes-modal.component';

describe('AddClothesModalComponent', () => {
  let component: AddClothesModalComponent;
  let fixture: ComponentFixture<AddClothesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClothesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClothesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
