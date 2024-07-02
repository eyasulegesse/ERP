<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Tax;
use App\Models\UOM;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductController extends Controller
{
    //
    public function index(Request $request)
    {

        try {
            $UOM = UOM::orderBy("id", "DESC")->get();
            $Category = Category::orderBy("id", "DESC")->get();
            $Taxes = Tax::orderBy("id", "DESC")->get();
            $products = Product::with(["uom", "category", "tax"])->orderBy("id", "DESC")->get();
            return Inertia::render('Pages/Product', [
                "UOM" => $UOM,
                "Category" => $Category,
                "Taxes" => $Taxes,
                "products" => $products
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
                "code" => ["required"],
                "name" => ["required"],
                "uom_id" => ["required"],
                "category_id" => ["required"],
                "tax_id" => ["required"],
                "cost" => ["required"],
                "price" => ["required"]
            ]);

            Product::create($data);
            return redirect()->route("product.index");
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
