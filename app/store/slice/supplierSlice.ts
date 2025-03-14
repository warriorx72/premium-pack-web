import { SuppliersContentResponse, SuppliersResponse } from "@/app/(admin)/services/suppliers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetSuppliers, fetchGetSuppliersByName } from "../thunk/supplierThunk";
import { UUID } from "crypto";

interface SupplierState {
  supplierList: SuppliersResponse;
  supplierFilter: SuppliersContentResponse[];
}

const initialState: SupplierState = {
  supplierList: {} as SuppliersResponse,
  supplierFilter: [],
};

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    deleteSupplier: (state: SupplierState, action: PayloadAction<UUID>) => {
      state.supplierList.content = state.supplierList.content.filter((supplier) => supplier.uuid !== action.payload)
    },
    cleanSupplierFilter: (state: SupplierState) => {
      state.supplierFilter = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSuppliers.fulfilled, (state: SupplierState, action: PayloadAction<SuppliersResponse>) => {
        state.supplierList = action.payload
      })
      .addCase(fetchGetSuppliersByName.fulfilled, (state: SupplierState, action: PayloadAction<SuppliersContentResponse[]>) => {
        state.supplierFilter = action.payload
      })

  },
});
  
  export default supplierSlice.reducer
  export const { deleteSupplier, cleanSupplierFilter } = supplierSlice.actions