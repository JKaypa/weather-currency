import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrency } from './weather-currency';

describe('WeatherCurrency', () => {
  let component: WeatherCurrency;
  let fixture: ComponentFixture<WeatherCurrency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCurrency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCurrency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
