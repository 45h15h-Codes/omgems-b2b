<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DiamondController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/status', function () {
    return response()->json([
        'status' => 'healthy',
        'version' => '1.0.0',
        'app' => config('app.name'),
        'environment' => config('app.env'),
    ]);
});

// Diamond PIM Routes
Route::get('/diamonds', [DiamondController::class, 'index']);
Route::get('/diamonds/{diamond}', [DiamondController::class, 'show']);

Route::middleware('web')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');
    Route::get('/me', [AuthController::class, 'me'])->middleware('auth');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/diamonds', [DiamondController::class, 'store'])->name('diamonds.store');
    Route::put('/diamonds/{diamond}', [DiamondController::class, 'update'])->name('diamonds.update');
    Route::delete('/diamonds/{diamond}', [DiamondController::class, 'destroy'])->name('diamonds.destroy');
});
