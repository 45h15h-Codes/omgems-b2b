<?php

namespace Database\Factories;

use App\Models\Diamond;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Diamond>
 */
class DiamondFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'shape' => $this->faker->randomElement(['Round', 'Pear', 'Princess', 'Emerald', 'Marquise', 'Oval', 'Radiant', 'Heart', 'Cushion', 'Asscher']),
            'carat' => $this->faker->randomFloat(3, 0.3, 5.0),
            'color' => $this->faker->randomElement(['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']),
            'clarity' => $this->faker->randomElement(['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1']),
            'cut' => $this->faker->randomElement(['Excellent', 'Very Good', 'Good', 'Ideal']),
            'polish' => $this->faker->randomElement(['Excellent', 'Very Good', 'Good']),
            'symmetry' => $this->faker->randomElement(['Excellent', 'Very Good', 'Good']),
            'fluorescence' => $this->faker->randomElement(['None', 'Faint', 'Medium', 'Strong']),
            'lab' => $this->faker->randomElement(['GIA', 'IGI', 'HRD']),
            'length' => $this->faker->randomFloat(2, 4.0, 10.0),
            'width' => $this->faker->randomFloat(2, 4.0, 10.0),
            'depth' => $this->faker->randomFloat(2, 2.0, 6.0),
            'table_percent' => $this->faker->randomFloat(2, 50.0, 70.0),
            'depth_percent' => $this->faker->randomFloat(2, 50.0, 70.0),
            'certificate_no' => $this->faker->unique()->numerify('##########'),
            'price' => $this->faker->randomFloat(2, 1000, 50000),
            'status' => 'available',
            'merchant_id' => 1, // Default to first user (SuperAdmin) or Merchant
        ];
    }
}
