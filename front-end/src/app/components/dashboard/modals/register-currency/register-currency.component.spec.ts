import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCurrencyComponent } from './register-currency.component';

describe('RegisterCurrencyComponent', () => {
  let component: RegisterCurrencyComponent;
  let fixture: ComponentFixture<RegisterCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
