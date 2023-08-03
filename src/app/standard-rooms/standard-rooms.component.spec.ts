import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRoomsComponent } from './standard-rooms.component';

describe('StandardRoomsComponent', () => {
  let component: StandardRoomsComponent;
  let fixture: ComponentFixture<StandardRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardRoomsComponent]
    });
    fixture = TestBed.createComponent(StandardRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
