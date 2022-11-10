import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycurrenciesComponent } from './my-currencies.component';

describe('MycurrenciesComponent', () => {
  let component: MycurrenciesComponent;
  let fixture: ComponentFixture<MycurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycurrenciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
