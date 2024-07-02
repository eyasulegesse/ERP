<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Datawarehouse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DatawarehouseController extends Controller
{
    public function index(Request $request)
    {
        try {
            $datawarehouse = Datawarehouse::with(['branch'])->orderBy('id', 'desc')->get();
            $branch = Branch::orderBy('id', 'desc')->get();

            return  Inertia::render('Pages/DataWareHouse', [
                'datawarehouse' => $datawarehouse,
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
                    "branch_id" => ['required']

                ]
            );
            Datawarehouse::create($data);
            return redirect()->route('Datawarehouse.index');
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
