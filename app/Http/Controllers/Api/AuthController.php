<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\Seller;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = \Validator::make($request->all(),[ 
            'name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|unique:user',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
           return response()->json($validator->messages(), 422);
        }
        $data = $validator->attributes();
        $data['password'] = Hash::make($data['password']);
    
        $user = User::create($data);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
    public function login(Request $request)
    {
        $validator = \Validator::make($request->all(),[ 
            'phone' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
           return response()->json($validator->errors(), 422);
        }
        
        $fields = $validator->attributes();

        $user = User::where('phone', $fields['phone'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password)){
            return response([
                'message' => 'Введите правильные данные!!!'
            ], 401);
        }
        $token = $user->createToken('myapptoken')->plainTextToken;
        
        $user = new UserResource($user);
        
        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 200);
    }

    public function logout(Request $request) {
        auth()->user()->tokens()->delete();

        return response('Вы вышли из сайта', 200);
    }
    public function refresh(Request $request){

        $user = User::find(Auth::user()->id);

        $user = new UserResource($user);

        return response($user, 200);
    }
}
