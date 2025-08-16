<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class WeatherCurrencyController extends Controller
{
    public function getWeatherCurrency(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'city' => 'required|string',
            'amount' => 'required|numeric',
            'base' => 'required|string',
            'target'=> 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Bad Request', 'error' => $validator->errors()], 400);
        }

        $city = $request->city;
        $amount = $request->amount;
        $base = $request->base;
        $target = $request->target;

        $weatherApiKey = env('WEATHER_API_KEY');
        $exchangeRateApiKey = env('EXCHANGE_RATE_API_KEY');

        $weather = Http::get("https://api.openweathermap.org/data/2.5/weather?q=$city&units=metric&appid=$weatherApiKey");
        $exchange = Http::get("https://v6.exchangerate-api.com/v6/$exchangeRateApiKey/pair/$base/$target/$amount");

        if (!$weather->successful()) {
            return response()->json([
                'message' => 'Weather API error',
                'status' => $weather->status(),
                'body' => $weather->body(),
            ], 500);
        }

        if (!$exchange->successful()) {
            return response()->json([
                'message' => 'Exchange API error',
                'status' => $exchange->status(),
                'body' => $exchange->body(),
            ], 500);
        }

        $weatherData = $weather->json();
        $exchangeData = $exchange->json();
        
        $mainTemp = $weatherData['main']['temp'] ?? null;
        $weatherMain = $weatherData['weather'][0]['main'] ?? null;
        
        $conversionRate = $exchangeData['conversion_rate'];
        $conversionResult = $exchangeData['conversion_result'];

        return response()->json([
            'temperature' => $mainTemp,
            'weather' => $weatherMain,
            'conversionRate' => $conversionRate,
            'conversionResult' => $conversionResult,
        ], 200);
    }
}
