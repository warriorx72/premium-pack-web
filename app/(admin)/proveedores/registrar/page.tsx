'use client'
import { patterns } from '@/app/form.constants';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch } from '@/app/store/hooks';
import { fetchPostSupplier } from '@/app/store/thunk/supplierThunk';
import { useRouter } from 'next/navigation';

export interface SupplierInputs {
    name: string;
    address: string;
    email: string;
    phone: string;
  }
const RegistrarPage = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SupplierInputs>();

    const onSubmit: SubmitHandler<SupplierInputs> = (data: SupplierInputs) => {
        dispatch(fetchPostSupplier(data));
        router.push("/proveedores/lista");
    }

    const isValidField = (field: string) => {
        return errors[field as keyof typeof errors] ? "is-invalid" : "";
      };

    const validateNoEmptySpaces = (value: string) => {
        return (
            value.trim().length > 2
        );
    };

    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <form className="row g-2 mt-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <label className="form-label">Nombre</label>
                    <input type="text" className={`form-control ${isValidField("name")}`} id="inputEmail4" {...register("name", { required: true, minLength: 3, maxLength: 100, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-12">
                    <label className="form-label">Dirección</label>
                    <input type="text" className={`form-control ${isValidField("address")}`} id="inputAddress" placeholder="1234 Main St" {...register("address", { required: true, minLength: 3, maxLength: 100, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-12">
                    <label className="form-label">Correo Electronico</label>
                    <input type="email" className={`form-control ${isValidField("email")}`} id="inputAddress2" placeholder="@gmail.com" {...register("email", { pattern: patterns.email, required: true, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Telefono</label>
                    <input type="text" className={`form-control ${isValidField("phone")}`} id="inputCity" {...register("phone", { required: true, minLength: 10, maxLength: 10, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-md-2 px-4 mt-5">
                    <input type="submit" className={`btn btn-primary px-2`} value={"Registrar"} />
                </div>
            </form>
        </div>
    )
}

export default RegistrarPage