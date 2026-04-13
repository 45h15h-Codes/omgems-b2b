<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Diamond;

use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create or reuse roles so the seeder can run repeatedly.
        $superAdminRole = Role::findOrCreate('SuperAdmin', 'web');
        Role::findOrCreate('Admin', 'web');
        Role::findOrCreate('Merchant', 'web');

        // 2. Create or refresh the bootstrap SuperAdmin user.
        $admin = User::updateOrCreate([
            'email' => 'admin@omgems.com',
        ], [
            'name' => 'Om Gems Super Admin',
            'password' => Hash::make('admin123'),
        ]);

        $admin->syncRoles([$superAdminRole]);

        // 3. Seed diamonds only when the table is empty to avoid duplicate demo data.
        if (Diamond::query()->doesntExist()) {
            Diamond::factory(500)->create([
                'merchant_id' => $admin->id,
            ]);
        }
    }
}
