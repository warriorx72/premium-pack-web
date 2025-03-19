import { OrdersResponse } from "@/app/(admin)/services/orders";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetOrders, fetchGetSales } from "../thunk/orderThunks";

interface ProductState {
    orderList: OrdersResponse;
    saleList: OrdersResponse;

}

const initialState: ProductState = {
    orderList: {} as OrdersResponse,
    saleList: {} as OrdersResponse
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetOrders.fulfilled, (state: ProductState, action: PayloadAction<OrdersResponse>) => {
                state.orderList = action.payload
            })
            .addCase(fetchGetSales.fulfilled, (state: ProductState, action: PayloadAction<OrdersResponse>) => {
                state.saleList = action.payload
            })
    },
});

export default orderSlice.reducer