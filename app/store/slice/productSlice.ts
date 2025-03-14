import { ProductResponse } from "@/app/(admin)/services/products";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    productList: ProductResponse;
}

const initialState: ProductState = {
    productList: {} as ProductResponse,
};

export const productSlice = createSlice({
    name: "supplier",
    initialState,
    reducers: {
    },
});

export default productSlice.reducer
export const { } = productSlice.actions