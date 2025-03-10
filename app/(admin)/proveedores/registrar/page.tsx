'use client'
import React from 'react'
import { useAppDispatch } from '@/app/store/hooks';
import { fetchPostSupplier } from '@/app/store/thunk/supplierThunk';
import { FormSupplierComponent } from '@/app/components/FormSupplierComponent';

export interface SupplierInputs {
    name: string;
    address: string;
    email: string;
    phone: string;
  }
const RegistrarPage = () => {

    const dispatch = useAppDispatch();

    const handleOnSubmit = async (data: SupplierInputs) => {
        await dispatch(fetchPostSupplier(data));
    }


    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <FormSupplierComponent 
                onSubmit={ handleOnSubmit }
                data={{} as SupplierInputs}
            /> 
        </div>
    )
}

export default RegistrarPage