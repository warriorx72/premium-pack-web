import { SuppliersResponse } from "@/app/(admin)/services/suppliers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetSuppliers } from "../thunk/supplierThunk";

interface SupplierState {
  supplierList: SuppliersResponse;
}

const initialState: SupplierState = {
  supplierList: {} as SuppliersResponse,
};

export const supplierSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSuppliers.fulfilled, (state: SupplierState, action: PayloadAction<SuppliersResponse>) => {
        state.supplierList = action.payload
      })

  },
});
  
  export default supplierSlice.reducer