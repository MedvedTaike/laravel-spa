<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Seller extends Authenticatable
{
    use HasApiTokens, Notifiable;
    
    protected $fillable = [
        'name','address', 'password','status'
    ];

    protected $table = 'seller';

    public $timestamps = false;

    public static function createSeller($fields)
    {
        $seller = new static;
        $seller->name = $fields['name'];
        $seller->phone = $fields['phone'];
        $seller->password = bcrypt($fields['password']);
        $seller->save();

        return $seller;
    }
}
