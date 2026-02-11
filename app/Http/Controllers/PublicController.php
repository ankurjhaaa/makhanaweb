<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
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
    public function loginform(Request $request)
    {
        // Validate the form data
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Attempt to authenticate the user
        if (auth()->attempt($validatedData)) {
            // Authentication passed, redirect to home page
            return redirect()->route('home');
        }

        // Authentication failed, redirect back with error message
        return redirect()->back()->withErrors(['email' => 'Invalid credentials.']);
    }
    public function signup()
    {
        return Inertia::render('Signup');
    }
    public function signupform(Request $request)
    {
        // Validate the form data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|string|max:20',
            'password' => 'required|string|min:6',
        ]);

        // Create a new user with the validated data
        $user = User::create($validatedData);

        // Return success response
        return redirect()->route('login')->with('success', 'Account created successfully. Please log in.');
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
