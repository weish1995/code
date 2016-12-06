<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/


Route::get('/', function () {
    return view('home/home/home');
 //   return 'test';
});

Route::get('/type', function () {
    return view('home/type/type');
});

Route::get('/search', function () {
    return view('home/search/search');
});

Route::get('/message', function () {
    return view('home/message/message');
});

Route::get('/detail', function () {
    return view('detail/detail');
});

