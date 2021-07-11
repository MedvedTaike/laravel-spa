<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    
    protected $fillable = [
        'name','phone','address', 'password', 'status'
    ];

    protected $table = 'user';

    public $timestamps = false;

    public static function makePassword($password)
    {
        return Hash::make($password);
    }
    public function orders()
    {
        return $this->hasMany(Order::class, 'id_user');
    }
}
