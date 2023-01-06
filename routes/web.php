<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');


Route::get('/about-me', function () {
    return Inertia::render('AboutMe');
})->name('about-me');


Route::get('/events', function () {
    return Inertia::render('Events');
})->name('events');

Route::get('/publications', function () {
    return Inertia::render('Publications');
})->name('publications');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/example', function () {
    return Inertia::render('Example');
})->name('example');

Route::get('/src/{folder}/{category?}/{file}', function ($folder, $category = 'null', $file) {
    /*images/caricaturas/contacto.jpeg'*/
    if ($category == 'null') {
        $directory = base_path() . '/resources/' . trim($folder, " ") . '/' . trim($file, " ");
    } else {
        $directory = base_path() . '/resources/' . trim($folder, " ") . '/' . trim($category, " ") . '/' . trim($file, " ");
    }
    try {

        $file = File::get($directory);
        $type = File::mimeType($directory);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    } catch (Exception $e) {
        echo 'Excepción capturada: ', $e->getMessage(), "\n";
    }
    return $directory;
});
