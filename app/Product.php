<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product';

    public $timestamps = false;
    
    protected $fillable = [
        'id_cat',
        'id_seller',
        'name',
        'spec',
        'buy',
        'sell',
        'measure',
        'sort',
        'status',
        'convert_t'
    ];
    public function category()
    {
        return $this->belongsTo(Category::class, 'id_cat');
    }
}

