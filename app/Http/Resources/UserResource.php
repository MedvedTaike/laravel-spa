<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'magazin' => $this->magazin,
            'address' => $this->address,
            'phone' => $this->phone,
            'orders' => $this->orders->where('status','1')->count(),
            'active' => $this->orders->where('status','0')->first()
        ];
    }
}
