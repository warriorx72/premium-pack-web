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
    name_supplier: string
}

const RegistrarPage = () => {

    const dispatch = useAppDispatch();

    const handleOnSubmit = async (data: ProductInputs) => {
        dispatch(fetchPostProduct(data));
    }

    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <FormProductComponent
                data={{} as ProductInputs}
                onSubmit={handleOnSubmit}
            />
        </div>
    )

}
export default RegistrarPage