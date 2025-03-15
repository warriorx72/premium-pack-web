'use client'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import React, { use, useEffect, useState } from 'react'
import { fetchUpdateProduct } from '@/app/store/thunk/productThunk'
import { UUID } from 'crypto'
import FormProductComponent from '@/app/components/FormProductComponent'
import { ProductContentResponse } from '../../services/products'
import { ProductInputs } from '../registrar/page'

type Props = {
    params: Promise<{ id: string }>
}

const UpdatePage = ({ params }: Props) => {

    const { productList } = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    const { id } = use(params) as { id: UUID };
    const [product, setProduct] = useState<ProductContentResponse>({} as ProductContentResponse);

    useEffect(() => {
        setProduct(productList.content.find((product) => product.uuid === id) as ProductContentResponse);
    }, [id, productList.content]);

    const handleOnSubmit = async (data: ProductInputs) => {
        await dispatch(fetchUpdateProduct({ id, productInputs: data }));
    }

    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <FormProductComponent
                onSubmit={ handleOnSubmit }
                data={product}
                isEditMode={true}
            />
        </div>
    )

}

export default UpdatePage;