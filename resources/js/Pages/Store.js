import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/Modalslice";
export default configureStore({
    reducer: {
        modal: modalReducer,
    },
});
