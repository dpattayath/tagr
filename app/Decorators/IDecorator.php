<?php

namespace App\Decorators;

use Throwable;

interface IDecorator
{
    /**
     * Interface stub to decorate successful response
     * @param $data
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function success($data);

    /**
     * Interface stub to decorate error response
     * @param Throwable $exp
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function error(Throwable $exp);
}
