import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeRoomsComponent } from './prime-rooms.component';

describe('PrimeRoomsComponent', () => {
  let component: PrimeRoomsComponent;
  let fixture: ComponentFixture<PrimeRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeRoomsComponent]
    });
    fixture = TestBed.createComponent(PrimeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
