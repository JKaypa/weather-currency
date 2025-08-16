import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../service/destination/destination';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country',
  imports: [CommonModule],
  templateUrl: './country.html',
  styleUrl: './country.css'
})
export class Country implements OnInit {
  destService = inject(Destination);
  router = inject(Router)

  ngOnInit(): void {
    this.destService.loadCountries();
  }

  onCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const id = +target.value
    this.destService.selectCountryById(id);
  }

  onCityChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const id = +select.value
    this.destService.selectCityById(id);
  }


  next() {
    void this.router.navigate(['/budget']);
  }
}
