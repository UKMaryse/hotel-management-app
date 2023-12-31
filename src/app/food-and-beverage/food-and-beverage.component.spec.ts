import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndBeverageComponent } from './food-and-beverage.component';

describe('FoodAndBeverageComponent', () => {
  let component: FoodAndBeverageComponent;
  let fixture: ComponentFixture<FoodAndBeverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodAndBeverageComponent]
    });
    fixture = TestBed.createComponent(FoodAndBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
