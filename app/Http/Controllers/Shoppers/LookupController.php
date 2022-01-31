<?php

namespace App\Http\Controllers\Shoppers;

use App\Decorators\IDecorator;
use App\Http\Controllers\Controller;
use App\Http\Requests\Shoppers\ProductLookupRequest;
use App\Services\Shoppers\LookupService;

class LookupController extends Controller
{
    /**
     * @var LookupService
     */
    protected $service;

    public function __construct(IDecorator $decorator, LookupService $service)
    {
        parent::__construct($decorator);
        $this->service = $service;
    }

    /**
     * Action to handle product look up for shoppers
     * @param ProductLookupRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function product(ProductLookupRequest $request)
    {
        try {
            return $this->decorator->success($this->service->lookupProduct($request->validated()));
        } catch (\Throwable $exp) {
            return $this->decorator->error($exp);
        }
    }
}
