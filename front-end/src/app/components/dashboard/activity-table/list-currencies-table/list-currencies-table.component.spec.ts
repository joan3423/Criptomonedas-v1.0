import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcurrenciesTableComponent } from './list-currencies-table.component';

describe('ListcurrenciesTableComponent', () => {
  let component: ListcurrenciesTableComponent;
  let fixture: ComponentFixture<ListcurrenciesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcurrenciesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcurrenciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
