<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    /**
     * Display the home page
     */
    public function login()
    {
        return Inertia::render('Login');
    }
    public function signup()
    {
        return Inertia::render('Signup');
    }
    public function home()
    {
        $products = Product::with([
            'variants' => function ($q) {
                $q->where('status', 1)
                    ->orderBy('price', 'asc');
            },
            'primaryImage',   // agar primaryImage relation banaya hai
            'images',         // optional: agar gallery bhi chahiye
        ])
            ->where('status', 1)
            ->latest()          // created_at DESC
            ->take(5)           // latest 5
            ->get();

        return Inertia::render('Home', [
            'products' => $products,
        ]);
    }
    public function store()
    {
        return Inertia::render('Store');
    }
    public function checkout()
    {
        return Inertia::render('Checkout');
    }
    public function contact()
    {
        return Inertia::render('Contact');
    }
    public function reviews()
    {
        return Inertia::render('Reviews');
    }
}
