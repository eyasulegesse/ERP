<?php

namespace App\Http\Controllers;

use App\Models\Customers;
use App\Models\Tax;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CustomersController extends Controller
{
    //
    public function index(Request $request)
    {

        try {
            $taxes = Tax::orderBy("id", "DESC")->get();
            $customers = Customers::with(['tax'])->orderBy("id", "DESC")->get();
            return Inertia::render("Pages/Customers", [
                "taxes" => $taxes,
                "customers" => $customers
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

            Customers::create($data);
            return redirect()->route("customers.index");
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
