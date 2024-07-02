<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string("code");
            $table->string("first_name");
            $table->string("middle_name");
            $table->string("last_name");
            $table->string("dob");
            $table->string("martial_status");
            $table->string("gender");
            $table->string("nationality");
            $table->string("category");
            $table->unsignedBigInteger("tax_id");
            $table->foreign("tax_id")->references("id")->on("taxes")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("branch_id");
            $table->foreign("branch_id")->references("id")->on("branches")->onDelete("cascade")->onUpdate("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
