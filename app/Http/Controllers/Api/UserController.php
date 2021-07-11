<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        $phone = $request->phone;

        $user = User::where('phone', $phone)->where('status', '1')->first();

        if($user === null){
            return response('Что то пошло не так!!!', 422);
        }

        return response($user, 200);
    }
}
