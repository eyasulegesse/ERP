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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("code");
            $table->string("name");
            $table->unsignedBigInteger("uom_id");
            $table->foreign("uom_id")->references("id")->on("u_o_m_s")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("category_id");
            $table->foreign("category_id")->references("id")->on("categories")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("tax_id");
            $table->foreign("tax_id")->references("id")->on("taxes")->onDelete("cascade")->onUpdate("cascade");
            $table->string("cost");
            $table->string("price");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
