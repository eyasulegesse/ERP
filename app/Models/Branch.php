<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Branch extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];

    public function datawarehouse(): HasMany
    {
        return $this->hasMany(Datawarehouse::class);
    }
    public function employee(): HasMany
    {
        return $this->hasMany(Employees::class);
    }
}
