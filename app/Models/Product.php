<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'category_slug',
        'status',
        'description',
    ];

    /**
     * Weight variants
     */
    public function variants()
    {
        return $this->hasMany(ProductVariant::class);
    }

    /**
     * Images
     */
    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    /**
     * Primary image
     */
    public function primaryImage()
    {
        return $this->hasOne(ProductImage::class)
            ->where('is_primary', 1);
    }
}
