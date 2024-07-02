<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employees extends Model
{
    use HasFactory;

    protected $fillable = [
        "code",
        "first_name",
        "middle_name",
        "last_name",
        "dob",
        "martial_status",
        "gender",
        "nationality",
        "category",
        "tax_id",
        "branch_id",

    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class);
    }
}
