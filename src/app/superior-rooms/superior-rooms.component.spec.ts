import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorRoomsComponent } from './superior-rooms.component';

describe('SuperiorRoomsComponent', () => {
  let component: SuperiorRoomsComponent;
  let fixture: ComponentFixture<SuperiorRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperiorRoomsComponent]
    });
    fixture = TestBed.createComponent(SuperiorRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
