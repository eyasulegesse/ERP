import { createSlice } from "@reduxjs/toolkit";

export const Modalslice = createSlice({
    name: "modal",
    initialState: {
        addModal: false,
    },
    reducers: {
        openAddModal: (state) => {
            state.addModal = true;
        },
        closeAddModal: (state) => {
            state.addModal = false;
        },
    },
});

export const { openAddModal, closeAddModal } = Modalslice.actions;

export default Modalslice.reducer;
