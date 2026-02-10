<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Home');
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
