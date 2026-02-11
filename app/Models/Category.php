<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'status',
    ];

    /**
     * A category (flavour) can have multiple products
     * (future-proof: combo / special flavours)
     */
    public function products()
    {
        return $this->belongsToMany(Product::class)
                    ->withTimestamps();
    }
}
