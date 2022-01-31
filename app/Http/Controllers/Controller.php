<?php

namespace App\Http\Controllers;

use App\Decorators\IDecorator;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @var IDecorator
     */
    protected $decorator;

    public function __construct(IDecorator $decorator)
    {
        $this->decorator = $decorator;
    }
}
