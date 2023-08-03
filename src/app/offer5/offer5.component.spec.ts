import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offer5Component } from './offer5.component';

describe('Offer5Component', () => {
  let component: Offer5Component;
  let fixture: ComponentFixture<Offer5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offer5Component]
    });
    fixture = TestBed.createComponent(Offer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
