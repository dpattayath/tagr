<?php

namespace App\Services\Shoppers;

use App\Models\Product;

/**
 * Service class to handle product look up functionalities
 */
class LookupService
{
    /**
     * Function to look up a product based on sku
     * @param $data
     * @return Product
     */
    public function lookupProduct($data) : Product
    {
        return Product::where('sku', $data['sku'])
            ->first();
    }
}
