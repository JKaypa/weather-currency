import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {Destination} from '../../service/destination/destination';

@Component({
  selector: 'app-weather-currency',
  imports: [CommonModule],
  templateUrl: './weather-currency.html',
  styleUrl: './weather-currency.css'
})
export class WeatherCurrency implements OnInit {
  router = inject(Router);
  destination = inject(Destination);

  ngOnInit(): void {
    this.destination.getDestinationData();
  }

}
