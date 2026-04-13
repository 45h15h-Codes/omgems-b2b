<?php

namespace App\Http\Controllers;

use App\Models\Diamond;
use App\Http\Requests\StoreDiamondRequest;
use Illuminate\Http\Request;

class DiamondController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Diamond::withFilters($request->all())
            ->with('merchant')
            ->paginate($request->get('limit', 20));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDiamondRequest $request)
    {
        $data = $request->validated();
        $data['merchant_id'] = $request->user()->id;

        $diamond = Diamond::create($data);

        return response()->json($diamond, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Diamond $diamond)
    {
        return $diamond->load('merchant');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreDiamondRequest $request, Diamond $diamond)
    {
        // Simple security check
        if ($diamond->merchant_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $diamond->update($request->validated());

        return response()->json($diamond);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Diamond $diamond)
    {
        if ($diamond->merchant_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $diamond->delete();

        return response()->json(['message' => 'Diamond archived successfully']);
    }
}
