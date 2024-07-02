<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Employees;
use App\Models\Tax;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class EmployeesController extends Controller
{
    public function index(Request $request)
    {
        try {
            $employees = Employees::orderBy("id", "DESC")->get();
            return Inertia::render('Pages/Employees', [
                'employees' => $employees
            ]);
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }

    public function addForm(Request $request)
    {
        try {
            $branches = Branch::orderBy("id", "DESC")->get();
            $taxes = Tax::orderBy("id", "DESC")->get();

            return Inertia::render("Components/employee/Add", [
                "branches" => $branches,
                "taxes" => $taxes

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
                "first_name" => ['required'],
                "middle_name" => ['required'],
                "last_name" => ['required'],
                "last_name" => ['required'],
                "dob" => ['required'],
                "martial_status" => ['required'],
                "gender" => ['required'],
                "nationality" => ['required'],
                "category" => ['required'],
                "tax_id" => ['required'],
                "branch_id" => ['required'],
            ]);

            Employees::create($data);
            return redirect()->route("employees.index");
        } catch (Exception $e) {
            dd($e->getMessage());
            Log::channel('error')->error(' IP ' . $request->ip . ' Message: ' . $e->getMessage());
            return redirect('/404');
        }
    }
}
