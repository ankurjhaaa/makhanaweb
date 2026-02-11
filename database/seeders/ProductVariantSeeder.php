<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductVariant;

class ProductVariantSeeder extends Seeder
{
    public function run(): void
    {
        $variants = [
            [
                'weight' => '50g',
                'price' => 99,
                'mrp' => 120,
                'stock' => 100,
            ],
            [
                'weight' => '100g',
                'price' => 179,
                'mrp' => 199,
                'stock' => 150,
            ],
            [
                'weight' => '200g',
                'price' => 329,
                'mrp' => 359,
                'stock' => 80,
            ],
        ];

        $products = Product::all();

        foreach ($products as $product) {
            foreach ($variants as $variant) {
                ProductVariant::create([
                    'product_id' => $product->id,
                    'weight' => $variant['weight'],
                    'price' => $variant['price'],
                    'mrp' => $variant['mrp'],
                    'stock' => $variant['stock'],
                    'status' => 1,
                ]);
            }
        }
    }
}
