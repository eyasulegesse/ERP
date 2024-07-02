<?php

namespace App\Http\Controllers;

use App\Models\Tax;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class TaxController extends Controller
{

    public function index(Request $request)
    {
        try {
            $tax = Tax::orderBy('id', 'DESC')->get();
            return Inertia::render('Pages/Tax', [
                'tax' => $tax
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
                'rate' => ['required'],

            ]);

            Tax::create($data);

            return redirect()->route('tax.index');
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
    //
}
