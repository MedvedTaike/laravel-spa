<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    public $preserveKeys = true; 
    
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->spec,
            'price' => number_format($this->buy, 2, '.', ''),
            'convert_text' => $this->getConvertText($this->convert_t),
            'convert_price' => $this->convert_t,
            'measure' => $this->getMeasureText($this->measure),
            'quantity' => 0,
            'sort' => $this->sort,
        ];
    }
    public function getConvertText($text){
        if($text != 1)
            {
                return $text.'/1';
            }
            return '';
    }
    public function getMeasureText($measure){
        switch($measure){
            case '0': return false;break;
            case '1': return 'Шт.';break;
            case '2': return 'Блок.';break;
            case '3': return 'Упаков.';break;
            case '4': return 'Короб.';break;
            case '5': return 'Рулон';break;
            case '6': return 'Кассета';break;
        }
    }
    public function getConvertPrice($convert, $price)
    {
        return $convert !== 1 ?  number_format(($convert * $price), 2, '.', '') : null;
    }
}
