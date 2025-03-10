import React, { useEffect } from 'react'
import { SupplierInputs } from '../(admin)/proveedores/registrar/page';
import { SubmitHandler, useForm } from 'react-hook-form';
import { patterns } from '../form.constants';
import { useRouter } from 'next/navigation';

type Props = {
    onSubmit: (data: SupplierInputs) => Promise<void>;
    data: SupplierInputs;
    isEditMode?: boolean
}

export const FormSupplierComponent = ( { data , onSubmit, isEditMode = false } : Props ) => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SupplierInputs>({ defaultValues: data });

    const onSubmitHandler: SubmitHandler<SupplierInputs> = (data: SupplierInputs) => {
        onSubmit(data).then(() => router.push("/proveedores/lista"));
    }

    const isValidField = (field: string) => {
        return errors[field as keyof typeof errors] ? "is-invalid" : "";
    };

    const validateNoEmptySpaces = (value: string) => {
        return (
            value.trim().length > 2
        );
    };

    useEffect(() => {
        reset(data);
    }, [data, reset]);

    return (
        <form className="row g-2 mt-2" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="col-md-6">
                <label className="form-label">Nombre</label>
                <input type="text" className={`form-control ${isValidField("name")}`} id="inputEmail4" {...register("name", { required: true, minLength: 3, maxLength: 100, validate: validateNoEmptySpaces })} readOnly={isEditMode} disabled={isEditMode} />
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
                <input type="submit" className={`btn btn-primary px-2`} value={isEditMode ? "Actualizar" : "Registrar"} />
            </div>
        </form>
    )
}