import { SuppliersResponse } from "@/app/(admin)/services/suppliers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetSuppliers } from "../thunk/supplierThunk";
import { UUID } from "crypto";

interface SupplierState {
  supplierList: SuppliersResponse;
}

const initialState: SupplierState = {
  supplierList: {} as SuppliersResponse
};

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    deleteSupplier: (state: SupplierState, action: PayloadAction<UUID>) => {
      state.supplierList.content = state.supplierList.content.filter((supplier) => supplier.uuid !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSuppliers.fulfilled, (state: SupplierState, action: PayloadAction<SuppliersResponse>) => {
        state.supplierList = action.payload
      })

  },
});
  
  export default supplierSlice.reducer
  export const { deleteSupplier } = supplierSlice.actions