import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import {authGuard} from './authGuard/auth-guard';
import {Country} from './pages/country/country';
import {Budget} from './pages/budget/budget';
import {WeatherCurrency} from './pages/weather-currency/weather-currency';

export const routes: Routes = [
  {
    path: 'register',
    title: 'Register',
    component: Register
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: Country,
    canActivate: [authGuard]
  },
  {
    path: 'budget',
    component: Budget,
    canActivate: [authGuard]
  },
  {
    path: 'weather-currency',
    component: WeatherCurrency,
    canActivate: [authGuard]
  }
];
