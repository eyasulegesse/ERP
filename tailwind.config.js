import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                bigspace: ["30px"],
                mediumSpace: ["20px"],
                smallSpace: ["10px"],
                extraSmallSpace: ["5px"],
            },
            fontSize: {
                header: ["24px"],
            },
            colors: {
                appfirst: ["#219C90"],
                appsecond: ["#EEF7FF"],
                appWhite: ["#fff"],
                appblack: ["#000"],
            },
        },
    },

    plugins: [forms],
};
