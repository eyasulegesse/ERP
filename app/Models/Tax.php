<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tax extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'rate'
    ];

    public function employee(): HasMany
    {

        return $this->hasMany(Employees::class);
    }
    public function item(): HasMany
    {
        return $this->hasMany(Item::class);
    }
    public function product(): HasMany
    {
        return $this->hasMany(Product::class);
    }
    public function semifinishedproduct(): HasMany
    {
        return $this->hasMany(SemiFinishedProduct::class);
    }
}
