'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postBffOrders } from '../services/orders';

type CustomerInputs = {
    name: string;
    phone: string;
    orderDetail: string;
}

export default function Home() {

  const openWhatsApp = (data: CustomerInputs, uuid: string) => {
    const newWindow = window.open(`https://api.whatsapp.com/send/?phone=522211163400&text=Hola,+mi+número+de+pedido+es:+${uuid}+->+${data.orderDetail}&type=phone_number&app_absent=0`, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerInputs>({ defaultValues: {} as CustomerInputs });


  const onSubmitHandler: SubmitHandler<CustomerInputs> = (data: CustomerInputs) => {
    postBffOrders({ customer_name: data.name, phone: data.phone, description: data.orderDetail }).then(res => {
      alert(`Número de pedido: ${res.id_text}`);
      openWhatsApp(data, res.id_text);
      reset({ name: '', phone: '', orderDetail: '' });
    })
  }

  const validateNoEmptySpaces = (value: string) => {
    return (
      value.trim().length > 2
    );
  };

  const isValidField = (field: string) => {
    return errors[field as keyof typeof errors] ? "is-invalid" : "";
  };

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row text-center">
            <div className="col-lg-6 mb-4">
              <h2>Envíanos tu pedido</h2>
              <p>
                Para realizar un pedido, contáctanos directamente por WhatsApp.
                Descríbenos el tipo de embalaje que necesitas, con todas sus caracteristicas y nos pondremos en contacto contigo.
              </p>
              <p><strong>Teléfono:</strong> +52 22 1116 3400</p>
            </div>
            <div className="col-lg-6 mb-4">
              <h2>Realiza tu pedido personalizado</h2>
              <p>
                Nos especializamos en la fabricación de embalajes de madera personalizados.
              </p>
              <form className="row g-2 mt-2" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="col-md-12">
                  <label className="form-label">Nombre</label>
                  <input type="text" className={`form-control ${isValidField("name")}`} {...register("name", { required: true, minLength: 3, maxLength: 50, validate: validateNoEmptySpaces })} />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Número de teléfono</label>
                  <input type="text" className={`form-control ${isValidField("phone")}`} id="inputPassword4" {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}/>
                </div>
                <div className="col-md-12">
                  <label className="form-label">Detalle del pedido</label>
                  <textarea className={`form-control ${isValidField("orderDetail")}`}  {...register("orderDetail", { required: true, minLength: 10, maxLength: 255, validate: validateNoEmptySpaces })}/>
                </div>
                <div className="col-md-12">
                  <button
                    className="btn btn-success mt-2"
                    type="submit"
                  >
                    <i className="bi-whatsapp me-1"></i>
                    Realizar pedido por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}