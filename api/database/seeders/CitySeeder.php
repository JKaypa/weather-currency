<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('cities')->insert([
            ['id' => 1, 'country_id' => 1, 'name' => 'London',      'created_at' => $now, 'updated_at' => $now],
            ['id' => 2, 'country_id' => 1, 'name' => 'Manchester',  'created_at' => $now, 'updated_at' => $now],
            ['id' => 3, 'country_id' => 2, 'name' => 'Mumbai',      'created_at' => $now, 'updated_at' => $now],
            ['id' => 4, 'country_id' => 2, 'name' => 'Delhi',       'created_at' => $now, 'updated_at' => $now],
            ['id' => 5, 'country_id' => 3, 'name' => 'Tokyo',       'created_at' => $now, 'updated_at' => $now],
            ['id' => 6, 'country_id' => 3, 'name' => 'Osaka',       'created_at' => $now, 'updated_at' => $now],
            ['id' => 7, 'country_id' => 4, 'name' => 'Copenhagen',  'created_at' => $now, 'updated_at' => $now],
            ['id' => 8, 'country_id' => 4, 'name' => 'Aarhus',      'created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
