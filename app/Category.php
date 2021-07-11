<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';

    public $timestamps = false;

    protected $fillable = ['name','status', 'sort'];

    public function products()
    {
        return $this->hasMany(Product::class, 'id_cat')->where('status', '1');
    }
    public function getStatusText($status)
    {
        return ($status == 1) ? 'Разрешен' : 'Не разрешен';
    }
}
