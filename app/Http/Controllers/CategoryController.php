<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CategoryController extends Controller
{
    //

    public function index(Request $request)
    {
        try {
            $category = Category::orderBy('id', 'DESC')->get();
            return Inertia::render("Pages/Category", [
                'category' => $category
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
            $data = $request->validate(
                [
                    'name' => ['required'],


                ]
            );
            Category::create($data);
            return redirect()->route('category.index');
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
