<?php

use App\Models\Country;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\City;
use App\Models\Currency;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('history', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Country::class)->constrained()->eagerLoad()->onDelete('cascade');
            $table->foreignIdFor(City::class)->constrained()->eagerLoad()->onDelete('cascade');
            $table->foreignIdFor(Currency::class)->constrained()->eagerLoad()->onDelete('cascade');
            $table->string('currency_rate');
            $table->integer('from_budget');
            $table->integer('to_budget');
            $table->string('temperature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('history');
    }
};
