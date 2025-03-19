'use client'
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { UUID } from "crypto";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { OrderResponse, OrderStatus } from "../../services/orders";
import { fetchUpdateOrder } from "@/app/store/thunk/orderThunks";

export interface OrderInputs {
    uuid: UUID;
    date: Date;
    customer_name: string;
    description: string;
    phone: string;
    status: OrderStatus;
    total: number;
}

type Props = {
    params: Promise<{ id: string }>
}

const RegistrarPage = ({ params }: Props) => {
    const router = useRouter();

    const { orderList } = useAppSelector((state) => state.order);
    const dispatch = useAppDispatch();
    const { id } = use(params) as { id: UUID };
    const [order, setOrder] = useState<OrderResponse>({} as OrderResponse);

    useEffect(() => {
        setOrder(orderList?.content?.find((order) => order.uuid === id) as OrderResponse);
    }, [id, orderList.content]);

    const handleOnSubmit = async (data: OrderInputs) => {
        await dispatch(fetchUpdateOrder({ id, orderInputs: data }));
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<OrderInputs>({ defaultValues: order });

    const onSubmitHandler: SubmitHandler<OrderInputs> = (data: OrderInputs) => {
        handleOnSubmit(data).then(() => router.push("/pedidos/lista"));
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
        reset(order);
    }, [order, reset]);

    return (
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <form className="row g-2 mt-2" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="col-md-6">
                    <label className="form-label">Número de Pedido</label>
                    <input type="text" className={`form-control`} disabled  {...register("uuid")} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Fecha de Pedido</label>
                    <input type="text" className={`form-control`} disabled {...register("date")} />
                </div>
                <div className="col-6">
                    <label className="form-label">Nombre del Cliente</label>
                    <input type="text" className={`form-control`} disabled {...register("customer_name")} />
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                    <label className="form-label">Telefono</label>
                    <input type="text" className={`form-control`} disabled {...register("phone")} />
                </div>
                <div className="col-6"></div>
                <div className="col-3">
                    <label className="form-label">Total</label>
                    <input type="number" step="0.01" className={`form-control ${isValidField("total")}`} {...register("total", { required: true, min: 0, valueAsNumber: true })} />
                </div>
                <div className="col-3">
                    <label className="form-label">Status</label>
                    <select className={`form-select ${isValidField("status")}`} {...register("status", { required: true })} >
                        <option value="ACCEPTED">Aceptado</option>
                        <option value="REJECTED">Rechazado</option>
                        <option value="COMPLETED">Completado</option>
                    </select>
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                    <label className="form-label">Descripción</label>
                    <textarea className={`form-control ${isValidField("description")}`} {...register("description", { required: true, minLength: 3, maxLength: 255, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-md-2 px-4 mt-5">
                    <label className="form-label"></label>
                    <input type="submit" className={`btn btn-primary px-2`} value={"Actualizar"} />
                </div>
            </form>
        </div>
    )
}
export default RegistrarPage