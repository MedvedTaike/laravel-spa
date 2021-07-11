<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\Http\Resources\CategoryCollection;

class CategoryController extends Controller
{
    public function getMenu()
    {
        $categories = Category::where('status', '1')->get();

        return new CategoryCollection($categories);
    }
}
