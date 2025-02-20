import React from 'react'

const RegistrarPage = () => {
    return (
            <div className="p-4 px-4 mt-4 rounded shadow container-fluid d-flex justify-content-center align-items-center" style={{ maxWidth: '1050px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <form className="row g-2 mt-2">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Nombre</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Apellidos</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Correo Electronico</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="@gmail.com"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Productos</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2 px-4 mt-5">
                    <button type="submit" className="btn btn-primary px-2 ">Registrar</button>
                </div>
            </form>
            </div>
    )
}

export default RegistrarPage