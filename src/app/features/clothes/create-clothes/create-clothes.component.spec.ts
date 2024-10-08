import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClothesComponent } from './create-clothes.component';

describe('CreateClothesComponent', () => {
  let component: CreateClothesComponent;
  let fixture: ComponentFixture<CreateClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
