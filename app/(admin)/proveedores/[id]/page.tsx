'use client'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import React, { use, useEffect, useState } from 'react'
import { SuppliersContentResponse } from '../../services/suppliers'
import { FormSupplierComponent } from '@/app/components/FormSupplierComponent'
import { SupplierInputs } from '../registrar/page'
import { fetchUpdateSupplier } from '@/app/store/thunk/supplierThunk'
import { UUID } from 'crypto'

type Props = {
    params: Promise<{ id: string }>
}

const UpdatePage = ({ params }: Props) => {

    const { supplierList } = useAppSelector((state) => state.supplier);
    const dispatch = useAppDispatch();
    const { id } = use(params) as { id: UUID };
    const [supplier, setSupplier] = useState<SuppliersContentResponse>({} as SuppliersContentResponse);

    useEffect(() => {
        setSupplier(supplierList.content.find((supplier) => supplier.uuid === id) as SuppliersContentResponse);
    }, [id, supplierList.content]);

    const handleOnSubmit = async (data: SupplierInputs) => {
        await dispatch(fetchUpdateSupplier({ id, supplierInputs: data }));
    }

    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <FormSupplierComponent
                onSubmit={ handleOnSubmit }
                data={supplier}
                isEditMode={true}
            />
        </div>
    )

}

export default UpdatePage;