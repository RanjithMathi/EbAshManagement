import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCustomerComponent } from './free-customer.component';

describe('FreeCustomerComponent', () => {
  let component: FreeCustomerComponent;
  let fixture: ComponentFixture<FreeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
