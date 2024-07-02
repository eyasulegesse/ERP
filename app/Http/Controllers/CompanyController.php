<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CompanyController extends Controller
{

    public function index(Request $request)
    {
        try {
            return Inertia::render('Pages/Company');
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
