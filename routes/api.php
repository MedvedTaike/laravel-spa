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


Route::get('/menu', 'Api\CategoryController@getMenu');
Route::get('/products/{id}', 'Api\ProductController@getProducts');
Route::post('/getUser', 'Api\UserController@getUser');
Route::post('/createOrder', 'Api\OrderController@store');
Route::post('/register', 'Api\AuthController@register');
Route::post('/login', 'Api\AuthController@login');

Route::middleware('auth:sanctum')->post('/logout', 'Api\AuthController@logout');
Route::middleware('auth:sanctum')->post('/refreshUser', 'Api\AuthController@refresh');
Route::middleware('auth:sanctum')->post('/auth/makeOrder', 'Api\OrderController@makeOrder');