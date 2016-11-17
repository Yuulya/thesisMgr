<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bo_mon extends Model
{
    //
    protected $fillable = [
    	'ten_bo_mon',
    	'mo_ta',
    	'khoa_id',
    	'ma_giang_vien'
    ];

    public function giang_vien()
    {
    	# code...
    	return $this->hasMany('App\Giang_vien');
    }

    public function khoa()
    {
    	# code...
    	return $this->belongsTo('App\Khoa');
    }
}
