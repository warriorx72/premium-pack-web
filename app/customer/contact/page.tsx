'use client'
import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="container py-5  ">
      <h1 className="text-center fw-bold mb-4">Contacto</h1>

      <div className="row">
        {/* Información de Contacto */}
        <div className="card shadow-lg border-0 p-4">
          <div className="card-body d-flex flex-column flex-lg-row align-items-center">
            <div className="text-center text-lg-start col-lg-8 col-6">
              <h3 className="fw-bold">Información de Contacto</h3>
              <p><strong>📍 Dirección:</strong> Garzontla 6, Axala, Barrio de Exquitla, 90750 Tlaxcala, Tlax.</p>
              <p><strong>📞 Teléfono:</strong> +52 221 1116 3400</p>
            </div>
            <div className="col-lg-2 col-6">
              <div className="card-img-top" style={{ width: "100%", height: "auto" }}>
                <Image 
                  src="/img/Premiumpack3.jpg" 
                  alt="Nuestra empresa" 
                  layout="intrinsic" 
                  width={600} 
                  height={400} 
                  className="rounded shadow-lg  w-200 h-auto object-fit-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa de Ubicación */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="fw-bold text-center mb-3">Nuestra Ubicación</h3>
          <div className="card shadow-lg border-0">
            <div className="card-body p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8670713419874!2d-98.24098382662747!3d19.201007448039842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfdbeefa892d9d%3A0x6e132c3a57ccaa0f!2sComercializadora%20Premium%20Pack%20Industrial%20Services!5e0!3m2!1ses!2smx!4v1741972902800!5m2!1ses!2smx"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
