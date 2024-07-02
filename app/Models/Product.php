<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "code",
        "name",
        "uom_id",
        "category_id",
        "tax_id",
        "cost",
        "price"
    ];

    public function uom(): BelongsTo
    {
        return $this->belongsTo(UOM::class);
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class);
    }
}
