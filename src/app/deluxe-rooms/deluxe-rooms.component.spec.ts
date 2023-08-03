import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeRoomsComponent } from './deluxe-rooms.component';

describe('DeluxeRoomsComponent', () => {
  let component: DeluxeRoomsComponent;
  let fixture: ComponentFixture<DeluxeRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeluxeRoomsComponent]
    });
    fixture = TestBed.createComponent(DeluxeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
