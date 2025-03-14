'use client'
import FormProductComponent from "@/app/components/FormProductComponent";
import { useAppDispatch } from "@/app/store/hooks";
import { fetchPostProduct } from "@/app/store/thunk/productThunk";
import { UUID } from "crypto";
import React from "react";

export interface ProductInputs {
    name: string;
    description: string;
    quantity: number;
    price: number;
    id_supplier: UUID;
}

const RegistrarPage = () => {

    const dispatch = useAppDispatch();

    const handleOnSubmit = async (data: ProductInputs) => {
        dispatch(fetchPostProduct(data));
    }

    return (
        <FormProductComponent
            data={{} as ProductInputs}
            onSubmit={handleOnSubmit}
        />
    )

}
export default RegistrarPage