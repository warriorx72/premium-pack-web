import { getBffSuppliers, Pageable } from "@/app/(admin)/services/suppliers"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchGetSuppliers = createAsyncThunk(
    'supplier/fetchGetSuppliers',
    async (pageable: Pageable) => {
      const response = await getBffSuppliers(pageable)
      return response
    },
  )