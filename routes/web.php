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


Route::get('/search', function () {
    $search = Request::input('search');

    $articles = App\Article::where('title', 'LIKE', "%$search%")
        ->where('active', 1)
        ->paginate(15);

    $brands = App\Article
        ::select('brand', DB::raw('COUNT(articles.brand) as count'))
        ->groupBy('brand')
        ->where('active', 1)
        ->get();

    return view('pages.index', ['articles' => $articles, 'brands' => $brands]);
});

Route::get('/filter', function () {
    $filters = Request::only(['brand', 'price']);
    $brands = $filters['brand'] ?? null;
    $prices = $filters['price'];
    $price_min = $prices['min'] ?? 0;
    $price_max = $prices['max'] ?? 99999999;

    $query = App\Article::select('title', 'image_path', 'rating', 'price', 'store_domain', 'article_path');

    if (!is_null($brands)) {
        $query->whereIn('brand', $brands);
    }

    $articles = $query->whereBetween('price', [($price_min * 100), ($price_max * 100)])
        ->paginate(15);

    $brands = App\Article
        ::select('brand', DB::raw('COUNT(articles.brand) as count'))
        ->groupBy('brand')
        ->where('active', 1)
        ->get();

    return view('pages.index', ['articles' => $articles, 'brands' => $brands]);
});

Route::get('/', function () {
    $articles = App\Article
        ::select('title', 'image_path', 'rating', 'price', 'store_domain', 'article_path')
        ->where('active', 1)
        ->paginate(15);
    $brands = App\Article
        ::select('brand', DB::raw('COUNT(articles.brand) as count'))
        ->groupBy('brand')
        ->where('active', 1)
        ->get();
    return view('pages.index', ['articles' => $articles, 'brands' => $brands]);
});
