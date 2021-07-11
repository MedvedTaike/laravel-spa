<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    public $timestamps = false;

    protected $fillable = ['id_user','id_party','buy','sell','products','bonus','sort','status','source','get_bonus','cell'];
    
    public static function add($data)
    {
        $totals = self::getTotals($data['order']);
        $order = new static;
        $order->id_user = $data['id_user'];
        $order->buy = $totals['buy'];
        $order->sell = $totals['sell'];
        $order->products = json_encode($data['order']);
        $order->status = 0;
        $order->save();

        return $order;
    }
    public static function getTotals($data)
    {
        $ids = array_keys($data);

        $result['sell'] = 0;
        $result['buy'] = 0;

        $products = Product::whereIn('id', $ids)->get();

        foreach($products as $product){
            $result['sell'] += $product->sell * $product->convert_t * $data[$product->id];
            $result['buy'] += $product->buy * $product->convert_t * $data[$product->id];
        }
        return $result;
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
