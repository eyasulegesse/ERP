<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customers extends Model
{
    use HasFactory;

    protected $fillable = [
        "code",
        "trade_name",
        "category",
        "tax_id",
        "tin"
    ];
    public function tax(): BelongsTo
    {
        return $this->belongsTo((Tax::class));
    }
}
