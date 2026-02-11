<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductImage;

class ProductImageSeeder extends Seeder
{
    public function run(): void
    {
        // Saare products lo
        $products = Product::all();

        // Common images (same for all products)
        $images = [
            [
                'image' => 'https://ik.imagekit.io/0j4v080uc/1757935734_makhana-1_QxyzMDTI26.jpeg?updatedAt=1757935735636',
                'is_primary' => 1,
            ],
            [
                'image' => 'https://ik.imagekit.io/0j4v080uc/1757761394_makhana_3fom96PkR.webp?updatedAt=1757761395462',
                'is_primary' => 0,
            ],
            [
                'image' => 'https://ik.imagekit.io/0j4v080uc/1757761394_makhana_3fom96PkR.webp?updatedAt=1757761395462',
                'is_primary' => 0,
            ],
        ];

        foreach ($products as $product) {
            foreach ($images as $img) {
                ProductImage::create([
                    'product_id' => $product->id,
                    'image' => $img['image'],
                    'is_primary' => $img['is_primary'],
                ]);
            }
        }
    }
}
