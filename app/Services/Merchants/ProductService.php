<?php

namespace App\Services\Merchants;

use App\Models\Product;
use Illuminate\Support\Collection;

/**
 * Service class to handle product related functionalities
 */
class ProductService
{
    /**
     * Function to create a product
     * @param $data
     * @return bool
     */
    public function createProduct($data) : bool
    {
        $product = new Product();
        $product->title = $data['title'];
        $product->description = $data['description'];
        $product->sku = $data['sku'];
        $product->price = $data['price'];
        return $product->save();
    }

    /**
     * Function to create a product
     * @return Collection
     */
    public function all() : Collection
    {
        return Product::all();
    }
}
