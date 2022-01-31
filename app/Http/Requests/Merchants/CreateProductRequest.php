<?php

namespace App\Http\Requests\Merchants;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'max:100'],
            'description' => ['required', 'max:500'],
            'price' => ['required', 'numeric'],
            'sku' => ['required'],
            'image' => ['sometimes']
        ];
    }
}
