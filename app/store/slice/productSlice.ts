import { ProductsResponse } from "@/app/(admin)/services/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UUID } from "crypto";
import { fetchGetProducts } from "../thunk/productThunk";

interface ProductState {
    productList: ProductsResponse;
}

const initialState: ProductState = {
    productList: {} as ProductsResponse,
};

export const productSlice = createSlice({
    name: "supplier",
    initialState,
    reducers: {
        deleteProduct: (state: ProductState, action: PayloadAction<UUID>) => {
            state.productList.content = state.productList.content.filter((product) => product.uuid !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetProducts.fulfilled, (state: ProductState, action: PayloadAction<ProductsResponse>) => {
                state.productList = action.payload
            })
    },
});

export default productSlice.reducer
export const { deleteProduct } = productSlice.actions