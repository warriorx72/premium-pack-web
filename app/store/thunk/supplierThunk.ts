import { SupplierInputs } from "@/app/(admin)/proveedores/registrar/page"
import { deleteBffSupplier, getBffSuppliers, getBffSuppliersByName, Pageable, postBffSupplier, putBffSupplier } from "@/app/(admin)/services/suppliers"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { UUID } from "crypto";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
      setTimeout(() => resolve(), ms);
  });

export const fetchGetSuppliers = createAsyncThunk(
  'supplier/fetchGetSuppliers/:loading',
  async (pageable: Pageable) => {
    const response = await getBffSuppliers(pageable)
    await wait(1000);
    return response
  },
)

export const fetchPostSupplier = createAsyncThunk(
  'supplier/fetchPostSupplier/:loading',
  async (supplierInputs: SupplierInputs) => {
    const response = await postBffSupplier(supplierInputs)
    await wait(1000);
    return response
  },
)

export const fetchDeleteSupplier = createAsyncThunk(
  'supplier/fetchDeleteSupplier/:loading',
  async (id: UUID) => {
    const response = await deleteBffSupplier(id)
    await wait(1000);
    return response
  },
)

export const fetchUpdateSupplier = createAsyncThunk(
  'supplier/fetchUpdateSupplier/:loading',
  async ( { id, supplierInputs } :{ id: UUID, supplierInputs: SupplierInputs }) => {
    const response = await putBffSupplier(id, supplierInputs)
    await wait(1000);
    return response
  },
)

export const fetchGetSuppliersByName = createAsyncThunk(
  'supplier/fetchGetSuppliersByName/:loading',
  async (name: string) => {
    const response = await getBffSuppliersByName(name)
    await wait(1000);
    return response
  },
)