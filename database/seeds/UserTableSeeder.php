<?php

use Illuminate\Database\Seeder;

use App\User;

use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::insert([
        	'name'   => 'Fizz',
            'password'   => Hash::make('scyphozoa1'),
            'email'      => 'fizz.uet@gmail.com', 
            'role'       => 'khoa',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        User::insert([
        	'name'   => 'Hieu',
            'password'   => 'hieuhieu',
            'email'      => 'hieu.uet@gmail.com', 
            'role'       => 'khoa',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        User::insert([
        	'name'   => 'Minh',
            'password'   => 'minhminh',
            'email'      => 'minh.uet@gmail.com', 
            'role'       => 'khoa',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

    }
}
