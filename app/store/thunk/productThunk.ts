import { ProductInputs } from "@/app/(admin)/productos/registrar/page";
import { deleteBffProduct, getBffProducts, postBffProduct, putBffProduct } from "@/app/(admin)/services/products";
import { Pageable } from "@/app/(admin)/services/suppliers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UUID } from "crypto";


const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

export const fetchPostProduct = createAsyncThunk(
    'supplier/fetchPostProduct/:loading',
    async (productInputs: ProductInputs) => {
        const response = await postBffProduct(productInputs)
        await wait(1000);
        return response
    },
)

export const fetchGetProducts = createAsyncThunk(
  'supplier/fetchGetProducts/:loading',
  async (pageable: Pageable) => {
    const response = await getBffProducts(pageable)
    await wait(1000);
    return response
  },
)

export const fetchDeleteProduct = createAsyncThunk(
  'supplier/fetchDeleteProduct/:loading',
  async (id: UUID) => {
    const response = await deleteBffProduct(id)
    await wait(1000);
    return response
  },
)

export const fetchUpdateProduct = createAsyncThunk(
  'supplier/fetchUpdateProduct/:loading',
  async ( { id, productInputs } :{ id: UUID, productInputs: ProductInputs }) => {
    const response = await putBffProduct(id, productInputs)
    await wait(1000);
    return response
  },
)