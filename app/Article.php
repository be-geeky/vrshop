<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'price',
        'rating',
        'brand',
        'article_path',
        'image_path',
        'active',
        'store_domain',
    ];


    public function getPriceAttribute($price)
    {
        $price = number_format($price / 100, 2);
        $price = $price ? '$' . $price : 'Not priced yet';
        return $price;
    }

    public function getRatingAttribute($rating)
    {
        $rating = $rating ? $rating . '%' : 'Not rated yet';
        return $rating;
    }

    public function getStoreDomainAttribute($domain)
    {
        return str_replace('http://', '', $domain);
    }

    public function setBrandAttribute($brand)
    {
        $this->attributes['brand'] = $brand ?? 'Unknown';
    }
}
