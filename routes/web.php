<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\DatawarehouseController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\ItemCategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SemiFinishedProductController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TaxController;
use App\Http\Controllers\UOMController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home');
    })->middleware(['auth', 'verified'])->name('home');

    Route::GET('/datawarehouse', [DatawarehouseController::class, 'index'])->name('Datawarehouse.index');
    Route::POST('/datawarehouse', [DatawarehouseController::class, 'store'])->name('Datawarehouse.store');

    Route::GET('/supplier', [SupplierController::class, 'index'])->name("supplier.index");
    Route::POST("/supplier", [SupplierController::class, "store"])->name("supplier.store");



    Route::GET('/customers', [CustomersController::class, 'index'])->name('customers.index');
    Route::POST('/customers', [CustomersController::class, 'store'])->name('customers.store');

    Route::GET('/employees', [EmployeesController::class, 'index'])->name('employees.index');
    Route::GET("/employee_add_form", [EmployeesController::class, "addForm"])->name("employee.add.form");
    Route::POST("/employees", [EmployeesController::class, "store"])->name("employee.store");

    Route::GET('/branch', [BranchController::class, 'index'])->name('branch.index');
    Route::POST('/branch', [BranchController::class, 'store'])->name('branch.store');

    Route::GET('/item', [ItemController::class, 'index'])->name('item.index');
    Route::POST('/item', [ItemController::class, 'store'])->name('item.store');

    Route::GET('/product', [ProductController::class, 'index'])->name('product.index');
    Route::POST('/product', [ProductController::class, 'store'])->name('product.store');

    Route::GET('/semi_finished_product', [SemiFinishedProductController::class, 'index'])->name('semi_finished_product.index');
    Route::POST('/semi_finished_product', [SemiFinishedProductController::class, 'store'])->name('semi_finished_product.store');

    Route::GET('/category', [CategoryController::class, 'index'])->name('category.index');
    Route::POST('/category', [CategoryController::class, 'store'])->name('category.index');

    Route::GET('/company', [CompanyController::class, 'index'])->name('company.index');

    Route::GET('/tax', [TaxController::class, 'index'])->name('tax.index');
    Route::POST('/tax', [TaxController::class, 'store'])->name('tax.store');

    Route::GET('/uom', [UOMController::class, 'index'])->name('uom.index');
    Route::POST('/uom', [UOMController::class, 'store'])->name('uom.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
