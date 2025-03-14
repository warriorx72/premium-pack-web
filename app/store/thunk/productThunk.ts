import { ProductInputs } from "@/app/(admin)/productos/registrar/page";
import { postBffProduct } from "@/app/(admin)/services/products";
import { createAsyncThunk } from "@reduxjs/toolkit";


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