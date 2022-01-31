<?php

namespace App\Http\Controllers\Merchants;

use App\Decorators\IDecorator;
use App\Http\Controllers\Controller;
use App\Http\Requests\Merchants\CreateProductRequest;
use App\Services\Merchants\ProductService;

class ProductController extends Controller
{
    /**
     * @var ProductService
     */
    protected $productService;

    public function __construct(IDecorator $decorator, ProductService $service)
    {
        parent::__construct($decorator);
        $this->productService = $service;
    }

    /**
     * Action to handle creation of a product
     * @param CreateProductRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function create(CreateProductRequest $request)
    {
        try {
            return $this->decorator->success($this->productService->createProduct($request->validated()));
        } catch (\Throwable $exp) {
            return $this->decorator->error($exp);
        }
    }

    /**
     * Action to handle retrieval of all product
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function all()
    {
        try {
            return $this->decorator->success($this->productService->all());
        } catch (\Throwable $exp) {
            return $this->decorator->error($exp);
        }
    }
}
