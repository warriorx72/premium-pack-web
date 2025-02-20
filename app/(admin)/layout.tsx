'use client';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { faCashRegister} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { redirect } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode}) {
    const awaitTimeout = (delay: number)  => new Promise(resolve => setTimeout(resolve, delay));

    const alertSession = async () => {
      await awaitTimeout(1000 * 60 * 23);
      alert("Sesión expirada");
      window.location.href = "/login";
    };

    useEffect(() => {
      alertSession();
    }, []);

    const removeCookie = async () => {
        await fetch(`/api/auth/logout`, {
          method: "POST"
        });
        redirect('/login')
      }

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
                            <li><button className="dropdown-item" onClick={() => removeCookie()}>Cerrar sesión</button></li>
                        </ul>
                    </li>

                </ul>
            </nav>

            <div className="container-fluid px-3 mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center" style={{height:"50px"}}>
                            <div className="card-body dropdown p-2 d-flex justify-content-center">
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
                    <div className="col-md-3" >
                        <div className="card bg-dark text-white text-center" style={{height:"50px"}}>
                            <div className="card-body dropdown p-2 d-flex justify-content-center">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownProveedores" data-bs-toggle="dropdown" aria-expanded="false">
                                    Proveedores <FontAwesomeIcon icon={faTruck} size="lg"/>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownProveedores">
                                    <li><button className="dropdown-item" onClick={()=> redirect('/proveedores/lista')}>Lista de proveedores</button></li>
                                    <li><button className="dropdown-item" onClick={() => redirect('/proveedores/registrar')}>Registrar proveedor</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center" style={{height:"50px"}}>
                            <div className="card-body dropdown p-2 d-flex justify-content-center">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownPedidos" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pedidos <FontAwesomeIcon icon={faCartShopping} size="lg"/>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownPedidos">
                                    <li><a className="dropdown-item" href="#">Lista de pedidos</a></li>
                                    <li><a className="dropdown-item" href="#">Nuevo pedido</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center" style={{height:"50px"}}>
                            <div className="card-body dropdown p-2 d-flex justify-content-center">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownVentas" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ventas <FontAwesomeIcon icon={faCashRegister} size="lg"/>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownVentas">
                                    <li><a className="dropdown-item" href="#">Historial de ventas</a></li>
                                    <li><a className="dropdown-item" href="#">Nueva venta</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <main>{children}</main>
            </div>
            
        </>
    );
  }