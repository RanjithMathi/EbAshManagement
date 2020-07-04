import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidCustomerComponent } from './paid-customer.component';

describe('PaidCustomerComponent', () => {
  let component: PaidCustomerComponent;
  let fixture: ComponentFixture<PaidCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
