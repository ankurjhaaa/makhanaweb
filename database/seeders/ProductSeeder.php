<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Premium Roasted Makhana',
                'slug' => 'makhana-plain',
                'category_slug' => 'plain',
                'description' => 'Light, crunchy and healthy plain roasted makhana.',
            ],
            [
                'name' => 'Premium Roasted Makhana',
                'slug' => 'makhana-masala',
                'category_slug' => 'masala',
                'description' => 'Classic Indian masala flavoured roasted makhana.',
            ],
            [
                'name' => 'Premium Roasted Makhana',
                'slug' => 'makhana-peri-peri',
                'category_slug' => 'peri-peri',
                'description' => 'Spicy peri peri flavoured crunchy makhana.',
            ],
            [
                'name' => 'Premium Roasted Makhana',
                'slug' => 'makhana-cheese',
                'category_slug' => 'cheese',
                'description' => 'Cheesy and creamy flavoured roasted makhana.',
            ],
            [
                'name' => 'Premium Roasted Makhana',
                'slug' => 'makhana-butter',
                'category_slug' => 'butter',
                'description' => 'Rich butter flavoured premium makhana.',
            ],
        ];

        foreach ($products as $product) {
            Product::create([
                'name' => $product['name'],
                'slug' => $product['slug'],
                'category_slug' => $product['category_slug'],
                'description' => $product['description'],
                'status' => 1,
            ]);
        }
    }
}
