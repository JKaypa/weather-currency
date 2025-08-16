<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\WeatherCurrencyController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login'])
    ->name('login');

Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/destination', [CountryController::class, 'getCountries'])
    ->middleware('auth:sanctum');

Route::post('/weather-currency', [WeatherCurrencyController::class, 'getWeatherCurrency'])
    ->middleware('auth:sanctum');
