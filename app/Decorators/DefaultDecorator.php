<?php

namespace App\Decorators;

use Illuminate\Database\QueryException;
use Throwable;

class DefaultDecorator implements IDecorator
{
    /**
     * Implemented method that decorates successful response
     * @param $data
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function success($data)
    {
        if ($data instanceof \Serializable) {
            return response(json_encode($data), 200);
        }
        return response($data, 200);
    }

    /**
     * Implemented function that decorates error response
     * @param Throwable $exp
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function error(Throwable $exp)
    {
        // mask sql error code
        if ((!$exp instanceof \Error)
            && (!$exp instanceof \ErrorException)
            && (!$exp instanceof QueryException)
        ) {
            $response = [
                'code' => $exp->getCode(),
                'message' => $exp->getMessage(),
                'errors' => []
            ];
        } else {
            $response = [
                'code' => 500,
                'message' => __('errors.unknown'),
                'errors' => []
            ];
        }
        return response($response, $response['code']);
    }
}
