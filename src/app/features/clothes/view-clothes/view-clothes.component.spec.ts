import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClothesComponent } from './view-clothes.component';

describe('ViewClothesComponent', () => {
  let component: ViewClothesComponent;
  let fixture: ComponentFixture<ViewClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
