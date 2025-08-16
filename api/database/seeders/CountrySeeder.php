<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('countries')->insert([
            ['id' => 1, 'name' => 'Inglaterra', 'code' => 'GB', 'currency_id' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 2, 'name' => 'India',      'code' => 'IN', 'currency_id' => 2, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 3, 'name' => 'Japón',      'code' => 'JP', 'currency_id' => 3, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 4, 'name' => 'Dinamarca',  'code' => 'DK', 'currency_id' => 4, 'created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
