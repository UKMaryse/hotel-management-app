import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offer3Component } from './offer3.component';

describe('Offer3Component', () => {
  let component: Offer3Component;
  let fixture: ComponentFixture<Offer3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offer3Component]
    });
    fixture = TestBed.createComponent(Offer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
