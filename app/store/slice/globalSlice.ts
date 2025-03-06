import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    isLoading: boolean;
}

const initialState: GlobalState = {
    isLoading: false
};



export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending") && action.type.includes(":loading"),
                (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled") && action.type.includes(":loading"),
                (state) => {
                    state.isLoading = false
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected") && action.type.includes(":loading"),
                (state) => {
                    setTimeout(() => {
                    }, 10000);
                    state.isLoading = false
                }
            )
    },
});

export default globalSlice.reducer