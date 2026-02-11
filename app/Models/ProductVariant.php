<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    protected $fillable = [
        'product_id',
        'weight',
        'price',
        'mrp',
        'stock',
        'status',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

