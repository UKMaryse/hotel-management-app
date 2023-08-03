import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offer6Component } from './offer6.component';

describe('Offer6Component', () => {
  let component: Offer6Component;
  let fixture: ComponentFixture<Offer6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offer6Component]
    });
    fixture = TestBed.createComponent(Offer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
