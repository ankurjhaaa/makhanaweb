<?php

use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(PublicController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::get('/signup', 'signup')->name('signup');
    
    Route::get('/', 'home')->name('home');
    Route::get('/store', 'store')->name('store');
    Route::get('/checkout', 'checkout')->name('checkout');
    Route::get('/contact', 'contact')->name('contact');
    Route::get('/reviews', 'reviews')->name('reviews');
   
});