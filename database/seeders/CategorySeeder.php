<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $flavours = [
            'Plain',
            'Masala',
            'Peri Peri',
            'Cheese',
            'Butter',  
        ];

        foreach ($flavours as $flavour) {
            Category::create([
                'name' => $flavour,
                'slug' => Str::slug($flavour), 
                'status' => 1,
            ]);
        }
    }
}
