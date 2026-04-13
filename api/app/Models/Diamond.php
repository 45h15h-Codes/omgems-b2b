<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diamond extends Model
{
    /** @use HasFactory<\Database\Factories\DiamondFactory> */
    use HasFactory;

    protected $fillable = [
        'shape', 'carat', 'color', 'clarity', 'cut', 'polish', 'symmetry', 
        'fluorescence', 'lab', 'length', 'width', 'depth', 
        'table_percent', 'depth_percent', 'certificate_no', 
        'certificate_url', 'media_json', 'price', 'status', 'merchant_id'
    ];

    protected $casts = [
        'media_json' => 'array',
        'carat' => 'decimal:3',
        'price' => 'decimal:2',
        'table_percent' => 'decimal:2',
        'depth_percent' => 'decimal:2',
    ];

    public function merchant()
    {
        return $this->belongsTo(User::class, 'merchant_id');
    }

    /**
     * Scope for advanced filtering.
     */
    public function scopeWithFilters($query, array $filters)
    {
        return $query
            ->when($filters['shape'] ?? null, fn($q, $v) => $q->whereIn('shape', (array) $v))
            ->when($filters['min_carat'] ?? null, fn($q, $v) => $q->where('carat', '>=', $v))
            ->when($filters['max_carat'] ?? null, fn($q, $v) => $q->where('carat', '<=', $v))
            ->when($filters['min_price'] ?? null, fn($q, $v) => $q->where('price', '>=', $v))
            ->when($filters['max_price'] ?? null, fn($q, $v) => $q->where('price', '<=', $v))
            ->when($filters['color'] ?? null, fn($q, $v) => $q->whereIn('color', (array) $v))
            ->when($filters['clarity'] ?? null, fn($q, $v) => $q->whereIn('clarity', (array) $v))
            ->when($filters['cut'] ?? null, fn($q, $v) => $q->whereIn('cut', (array) $v))
            ->when($filters['status'] ?? 'Available', fn($q, $v) => $q->where('status', $v));
    }
}
