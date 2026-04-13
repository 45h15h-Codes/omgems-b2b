<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreDiamondRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Auth handled via middleware
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'shape' => 'required|string|in:Round,Pear,Princess,Emerald,Marquise,Oval,Radiant,Heart,Cushion,Asscher',
            'carat' => 'required|numeric|min:0.01|max:50',
            'color' => 'nullable|string',
            'clarity' => 'nullable|string',
            'cut' => 'nullable|string',
            'polish' => 'nullable|string',
            'symmetry' => 'nullable|string',
            'fluorescence' => 'nullable|string',
            'lab' => 'nullable|string|in:GIA,IGI,HRD',
            'length' => 'nullable|numeric|min:0',
            'width' => 'nullable|numeric|min:0',
            'depth' => 'nullable|numeric|min:0',
            'table_percent' => 'nullable|numeric|min:0|max:100',
            'depth_percent' => 'nullable|numeric|min:0|max:100',
            'certificate_no' => 'nullable|string|unique:diamonds,certificate_no',
            'price' => 'required|numeric|min:0.01',
            'status' => 'nullable|in:available,hold,sold',
        ];
    }
}
