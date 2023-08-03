import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorSuiteComponent } from './junior-suite.component';

describe('JuniorSuiteComponent', () => {
  let component: JuniorSuiteComponent;
  let fixture: ComponentFixture<JuniorSuiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuniorSuiteComponent]
    });
    fixture = TestBed.createComponent(JuniorSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
