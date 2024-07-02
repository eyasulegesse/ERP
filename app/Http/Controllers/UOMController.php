<?php

namespace App\Http\Controllers;

use App\Models\UOM;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UOMController extends Controller
{

    public function index(Request $request)
    {
        try {
            $uom = UOM::orderBy('id', 'DESC')->get();
            return Inertia::render('Pages/UOM', [
                'uom' => $uom
            ]);
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'name' => ['required'],


            ]);

            UOM::create($data);

            return redirect()->route('uom.index');
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
