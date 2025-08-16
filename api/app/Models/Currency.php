<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Currency extends Model
{
    use HasFactory;

    protected $table = 'currencies';

    protected $fillable = [
        'name',
        'code',
        'symbol',
    ];

    public function countries(): HasMany
    {
        return $this->hasMany(Country::class);
    }

    public function histories(): HasMany
    {
        return $this->hasMany(History::class);
    }
}
