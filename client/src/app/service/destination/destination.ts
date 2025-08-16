import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../api.config';
import {Country, City, Currency, DestinationData} from '../../models/destination';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Destination {
  private readonly baseUrl = inject(API_BASE_URL);
  private readonly http = inject(HttpClient);
  private router = inject(Router);

  countries = signal<Country[] | null>(null);
  cities = signal<City[] | null>(null);

  selectedCountry = signal<Country | null>(null);
  selectedCity = signal<City | null>(null);
  selectedCurrency = signal<Currency | null>(null);
  convertedAmount = signal<number>(0);
  currencyRate = signal<number>(0);
  selectedBudget = signal<number>(0);
  weather = signal<string>('');
  temperature = signal<number>(0);



  loadCountries() {
    if(!this.countries()) {
      this.http.get<Country[]>(`${this.baseUrl}/destination`).subscribe({
        next: (allCountries) => this.countries.set(allCountries ?? null),
        error: () => {
          alert('Failed to load countries');
          this.countries.set(null);
        }
      });
    }
  }

  selectCountryById(id: number) {
    const allCountries = this.countries();
    const country = allCountries?.find(country => country.id === id) ?? null;
    this.selectedCountry.set(country);

    const cities = country?.cities ?? null;
    this.cities.set(cities);
    this.selectedCity.set(null);
    this.selectedCurrency.set(country?.currency ?? null);
  }

  selectCityById(id: number) {
    const cities = this.cities();
    const city = cities?.find(city => city.id === id) ?? null;
    this.selectedCity.set(city);
  }

  getDestinationData(){
    const data = {
      city: this.selectedCity()?.name,
      amount: this.selectedBudget(),
      base: 'COP',
      target: this.selectedCurrency()?.code
    }
    this.http.post<DestinationData>(`${this.baseUrl}/weather-currency`, data).subscribe({
      next: (data) => {
        this.convertedAmount.set(data.conversionResult)
        this.currencyRate.set(data.conversionRate)
        this.weather.set(data.weather)
        this.temperature.set(data.temperature)
      },
      error: () => {
        alert('Failed to load destination data');
        this.reset()
      }
    })
  }

  reset(){
    this.cities.set(null);
    this.selectedCountry.set(null)
    this.selectedCity.set(null)
    this.selectedCurrency.set(null)
    this.convertedAmount.set(0)
    this.currencyRate.set(0)
    this.selectedBudget.set(0)
    this.weather.set('')
    this.temperature.set(0)
    void this.router.navigate(['/']);
  }
}
