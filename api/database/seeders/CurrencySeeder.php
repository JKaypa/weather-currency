<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('currencies')->insert([
            ['id' => 1, 'name' => 'Libra esterlina', 'code' => 'GBP', 'symbol' => '£', 'created_at' => $now, 'updated_at' => $now],
            ['id' => 2, 'name' => 'Rupia india',     'code' => 'INR', 'symbol' => '₹', 'created_at' => $now, 'updated_at' => $now],
            ['id' => 3, 'name' => 'Yen japonés',     'code' => 'JPY', 'symbol' => '¥', 'created_at' => $now, 'updated_at' => $now],
            ['id' => 4, 'name' => 'Corona danesa',   'code' => 'DKK', 'symbol' => 'kr','created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
