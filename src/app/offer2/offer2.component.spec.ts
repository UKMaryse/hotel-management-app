import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offer2Component } from './offer2.component';

describe('Offer2Component', () => {
  let component: Offer2Component;
  let fixture: ComponentFixture<Offer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offer2Component]
    });
    fixture = TestBed.createComponent(Offer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
