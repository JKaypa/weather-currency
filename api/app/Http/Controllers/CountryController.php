<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class CountryController extends Controller
{
    public function getCountries(){
        $countries = Country::with('currency', 'cities')->get();
        return response()->json($countries);
    }
}
