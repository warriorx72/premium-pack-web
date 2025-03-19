"use client";
import React from "react";
import './styles.css';
import { redirect } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {



  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container px-4 px-lg-5">
          <button className="navbar-brand text-white btn btn-link" onClick={() => redirect('home')}>Premium Pack <i className="bi bi-box-seam"></i></button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <button className="nav-link text-white" onClick={() => redirect('about')}>Acerca de</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white" onClick={() => redirect('contact')}>Contacto</button>
            </li>
          </ul>
        </div>
      </nav>

      <header className="bg-dark py-3">
        <div className="container text-center text-white">
       
        </div>
      </header>

      <main className="container my-4">{children}</main>

      <footer className="py-4 bg-dark d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 mt-auto">
        <div className="container">
          <p className="m-0 text-center text-white">&copy; Premium Pack 2025</p>
        </div>
      </footer>
    </div>
  );
}
