import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValComponent } from './forms-val.component';

describe('FormsValComponent', () => {
  let component: FormsValComponent;
  let fixture: ComponentFixture<FormsValComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsValComponent]
    });
    fixture = TestBed.createComponent(FormsValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
