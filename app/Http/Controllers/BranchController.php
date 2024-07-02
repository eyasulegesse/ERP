<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class BranchController extends Controller
{

    public function index(Request $request)
    {
        try {

            $branch = Branch::orderBy('id', 'desc')->get();

            return  Inertia::render('Pages/Branch', [

                'branch' => $branch
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
            Branch::create($data);
            return redirect()->route('branch.index');
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
