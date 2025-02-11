'use client';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";

export default function AdminLayout({ children }: { children: React.ReactNode}) {
    const awaitTimeout = (delay: number)  => new Promise(resolve => setTimeout(resolve, delay));

    const alertSession = async () => {
      await awaitTimeout(1000 * 60 * 23);
      alert("Sesión expirada");
      window.location.href = "/login";
    };

    useEffect(() => {
      console.log("AdminLayout");
      alertSession();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
                <a className="navbar-brand ps-3" href="#">Premium Pack</a>
                <ul className="navbar-nav ms-auto me-3">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown"><FontAwesomeIcon icon={faCircleUser} size="lg"/></a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li><a className="dropdown-item" href="#">Configuración</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>

            <div className="container-fluid px-4 mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center">
                            <div className="card-body dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownProductos" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos <FontAwesomeIcon icon={faBox} size="lg"/>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownProductos">
                                    <li><a className="dropdown-item" href="#">Ver productos</a></li>
                                    <li><a className="dropdown-item" href="#">Agregar producto</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center">
                            <div className="card-body dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownProveedores" data-bs-toggle="dropdown" aria-expanded="false">
                                    Proveedores <i className="fas fa-truck fa-2x"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownProveedores">
                                    <li><a className="dropdown-item" href="#">Lista de proveedores</a></li>
                                    <li><a className="dropdown-item" href="#">Registrar proveedor</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center">
                            <div className="card-body dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownPedidos" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pedidos <i className="fas fa-shopping-cart fa-2x"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownPedidos">
                                    <li><a className="dropdown-item" href="#">Lista de pedidos</a></li>
                                    <li><a className="dropdown-item" href="#">Nuevo pedido</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center">
                            <div className="card-body dropdown">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownVentas" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ventas <i className="fas fa-cash-register fa-2x"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownVentas">
                                    <li><a className="dropdown-item" href="#">Historial de ventas</a></li>
                                    <li><a className="dropdown-item" href="#">Nueva venta</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </>
    );
  }