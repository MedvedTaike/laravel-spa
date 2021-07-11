<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductCollection;
use App\Product;
use App\Category;

class ProductController extends Controller
{
    public function getProducts($id)
    {
        $products = Category::find($id)->products->keyBy('sort');

        return new ProductCollection($products);
    }
}
