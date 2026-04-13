<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('diamonds', function (Blueprint $table) {
            $table->id();
            
            // Core 4Cs
            $table->string('shape');
            $table->decimal('carat', 8, 3);
            $table->string('color')->nullable();
            $table->string('clarity')->nullable();
            $table->string('cut')->nullable();

            // Advanced Technical Specs
            $table->string('polish')->nullable();
            $table->string('symmetry')->nullable();
            $table->string('fluorescence')->nullable();
            $table->string('lab')->nullable(); // GIA, IGI, etc.
            
            // Measurements & Percentages
            $table->decimal('length', 8, 2)->nullable();
            $table->decimal('width', 8, 2)->nullable();
            $table->decimal('depth', 8, 2)->nullable();
            $table->decimal('table_percent', 5, 2)->nullable();
            $table->decimal('depth_percent', 5, 2)->nullable();
            
            // Identity & Media
            $table->string('certificate_no')->unique()->nullable();
            $table->string('certificate_url')->nullable();
            $table->json('media_json')->nullable(); // For photos/videos
            
            // Business Logic
            $table->decimal('price', 15, 2);
            $table->enum('status', ['available', 'hold', 'sold'])->default('available');
            $table->foreignId('merchant_id')->constrained('users')->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diamonds');
    }
};
