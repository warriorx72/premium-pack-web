'use client'
import React from "react";
import Image from "next/image"; 

export default function About() {
  return (
    <div className="container-fluid py-5">
      <h1 className="text-center fw-bold mb-4">Sobre Nosotros</h1>

      <section className="mb-5 col-lg-12 col">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 card shadow-lg border-0 p-4">
            <div className="card-body text-center">
              <h3 className="fw-bold">Nuestra Historia</h3>
              <p className="text-muted text-wrap text-justify">
                Somos una empresa mexicana dedicada a la producción de tarimas, embalajes, 
                empaques industriales y productos de madera. Premium Pack nació con el objetivo 
                de proporcionar soluciones de embalaje de madera personalizadas para empresas 
                y particulares. Con años de experiencia en el sector, hemos perfeccionado nuestras
                técnicas para ofrecer productos de alta calidad.
              </p>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="card-img-top" style={{ width: "100%", height: "auto" }}>
              <Image 
                src="/img/Premiumpack1.jpg" 
                alt="Nuestra empresa" 
                layout="intrinsic" 
                width={200} 
                height={0} 
                className="rounded shadow-lg w-80 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="card shadow-lg border-0 p-4 mb-4">
              <div className="card-body text-center">
                <i className="bi bi-bullseye text-primary display-4 mb-3"></i>
                <h3 className="fw-bold">Misión</h3>
                <p className="text-justify">
                  Nuestra misión es ofrecer soluciones innovadoras en embalaje de madera,
                  proporcionando productos de alta calidad que garantizan la seguridad y 
                  protección de los bienes de nuestros clientes, con un enfoque sostenible 
                  y responsable con el medio ambiente.
                </p>
              </div>
            </div>
            <div className="card shadow-lg border-0 p-4">
              <div className="card-body text-center">
                <i className="bi bi-eye text-success display-4 mb-3"></i>
                <h3 className="fw-bold">Visión</h3>
                <p className="text-justify">
                  Ser líderes en el sector de embalajes de madera, reconocidos por nuestra 
                  calidad, innovación y compromiso con la sostenibilidad. Buscamos expandir 
                  nuestra presencia en el mercado global, ofreciendo soluciones eficientes 
                  que superen las expectativas de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center">
            <div className="card-img-top" style={{ width: "100%", height: "auto" }}>
              <Image 
                src="/img/Premiumpack2.jpg" 
                alt="Misión y Visión" 
                layout="intrinsic" 
                width={200} 
                height={0} 
                className="rounded shadow-lg w-100 h-auto object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="card shadow-lg border-0 p-4">
          <div className="card-body text-center">
            <h3 className="fw-bold">Nuestros Valores</h3>
            <ul className="list-group">
              <li className="list-group-item">Calidad y excelencia en nuestros productos</li>
              <li className="list-group-item">Compromiso con la satisfacción del cliente</li>
              <li className="list-group-item">Sostenibilidad y respeto por el medio ambiente</li>
              <li className="list-group-item">Innovación en cada proyecto</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
