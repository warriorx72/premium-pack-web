'use client'
import React, { useEffect, useState } from 'react'
import { ProductInputs } from '../(admin)/productos/registrar/page';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchGetSuppliersByName } from '../store/thunk/supplierThunk';
import { cleanSupplierFilter } from '../store/slice/supplierSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type Props = {
    onSubmit: (data: ProductInputs) => Promise<void>;
    data: ProductInputs;
    isEditMode?: boolean
}

const FormProductComponent = ({ onSubmit, data, isEditMode = false }: Props) => {

    const dispatch = useAppDispatch();
    const supplierFilter = useAppSelector((state) => state.supplier.supplierFilter);
    const [filterName, setFilterName] = useState('');
    const router = useRouter();

    useEffect(() => {
        return () => {
            dispatch(cleanSupplierFilter());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (filterName.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres');
            return;
        }
        dispatch(fetchGetSuppliersByName(filterName));
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(event.target.value);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductInputs>({ defaultValues: data });


    const onSubmitHandler: SubmitHandler<ProductInputs> = (data: ProductInputs) => {
        onSubmit(data).then(() => router.push("/productos/lista"));
    }

    const validateNoEmptySpaces = (value: string) => {
        return (
            value.trim().length > 2
        );
    };

    const isValidField = (field: string) => {
        return errors[field as keyof typeof errors] ? "is-invalid" : "";
    };

    useEffect(() => {
        reset(data);
    }, [data, reset]);

    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <form className="row g-2 mt-2" onSubmit={handleSubmit(onSubmitHandler)} >
                <div className="col-md-6">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" className={`form-control ${isValidField("name")}`} id="inputPassword4" {...register("name", { required: true, minLength: 3, maxLength: 100, validate: validateNoEmptySpaces })} readOnly={isEditMode} disabled={isEditMode} />
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-3">
                    <label className="form-label">Precio</label>
                    <input type="number" step="0.01" className={`form-control ${isValidField("price")}`} id="inputAddress2" {...register("price", { required: true, min: 0, valueAsNumber: true })} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className={`form-control ${isValidField("quantity")}`} id="inputCity" {...register("quantity", { required: true, min: 0, valueAsNumber: true })} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Descripcion</label>
                    <textarea className={`form-control ${isValidField("description")}`} aria-label="With textarea" {...register("description", { required: true, minLength: 3, maxLength: 100, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Proveedor</label>
                    <div className="input-group ">
                        <select className={`form-select ${isValidField("id_supplier")}`} style={{ "maxWidth": "300px" }} disabled={supplierFilter?.length === 0} {...register("id_supplier", { required: true })} >
                            <option value="">Seleccionar proveedor</option>
                            {supplierFilter?.map((supplier) => (
                                <option key={supplier.uuid} value={supplier.uuid}>{supplier.name}</option>
                            ))}
                        </select>
                        <input type="text" className={`form-control ${isValidField("id_supplier")}`} placeholder="Buscar proveedor..." onChange={handleOnChange} />
                        <button className="btn btn-primary" type="submit" onClick={handleSearch} >Search</button>
                    </div>
                </div>
                <div className="col-md-2 px-4 ">
                    <div className='pt-4'></div>
                    <div className="input-group">
                        <button type="submit" className="btn btn-primary px-2 mt-2">Registrar</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default FormProductComponent