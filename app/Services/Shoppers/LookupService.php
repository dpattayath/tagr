<?php

namespace App\Services\Shoppers;

use App\Models\Product;

/**
 * Service class to handle product related functionalities
 */
class LookupService
{
    /**
     * Function to create a product
     * @param $data
     * @return Product
     */
    public function lookupProduct($data) : Product
    {
        return Product::first();
    }
}
