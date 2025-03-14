'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchBffLogin } from "./services/security";

interface LoginCredentials {
  user: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    user: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async(event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetchBffLogin(credentials.user, credentials.password).then(() => {
    router.push("/dashboard");
    });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <div className="container-fluid overflow-auto my-auto">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Ingresa un usuario valido"
                  name="user"
                  value={credentials.user}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Usuario
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Ingresa la contraseña"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Contraseña
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    RECORDAR
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Olvidaste tu contraseña?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-dark btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark mt-auto">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
