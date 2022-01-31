<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Merchant routes
 */
Route::group(['prefix' => 'merchants'], function () {
    Route::group(['prefix' => 'products'], function ($api) {
        $api->post('/', [\App\Http\Controllers\Merchants\ProductController::class, 'create']);
        $api->get('/', [\App\Http\Controllers\Merchants\ProductController::class, 'all']);
    });
});

/**
 * Shopper routes
 */
Route::group(['prefix' => 'shoppers'], function () {
    Route::group(['prefix' => 'product'], function ($api) {
        $api->post('lookup', [\App\Http\Controllers\Shoppers\LookupController::class, 'product']);
    });
});
