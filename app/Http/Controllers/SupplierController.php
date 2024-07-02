<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use App\Models\Tax;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SupplierController extends Controller
{
    //

    public function index(Request $request)
    {
        try {
            $taxes = Tax::orderBy("id", "DESC")->get();
            $supplier = Supplier::with(['tax'])->orderBy("id", "DESC")->get();
            return Inertia::render("Pages/Supplier", [
                "taxes" => $taxes,
                "supplier" => $supplier
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
                "code" => ['required'],
                "trade_name" => ['required'],
                "category" => ['required'],
                "tax_id" => ['required'],
                "tin" => ['required'],

            ]);

            Supplier::create($data);
            return redirect()->route("supplier.index");
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
