<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Order;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function store(Request $request)
    {           
        $time = now();
        $date = $time->next('Sunday')->format('d-m-Y');

        $active_order = Order::where('id_user', $request->id_user)->where('status', 0)->first();
      
        if($active_order !== null){
            return response('У вас уже есть заказ!', 422);
        }

        $result = Order::add($request->all());

        if($result){
            return response($date, 201);
        }

        return response('Что то пошло не так!!!', 418);
    }
    public function makeOrder(Request $request)
    {
        $data['order'] = $request->get('order');
        $data['id_user'] = Auth::user()->id;

        $result = Order::add($data);

        if($result){
            return response('Ваш заказ оформлен!', 201);
        }
        return response('Что то пошло не так!!!', 418);
    }
}
