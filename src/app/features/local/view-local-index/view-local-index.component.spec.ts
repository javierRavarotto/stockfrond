import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocalIndexComponent } from './view-local-index.component';

describe('ViewLocalIndexComponent', () => {
  let component: ViewLocalIndexComponent;
  let fixture: ComponentFixture<ViewLocalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLocalIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewLocalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
