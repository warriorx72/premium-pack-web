import React from "react";


const RegistrarPage = () => {
    return(
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <form className="row g-2 mt-2">
                <div className="col-md-6">
                    <label  className="form-label">ID</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Nombre del producto</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Descripcion</label>
                    <textarea className="form-control" aria-label="With textarea"/>
                </div>
                <div className="col-md-2">
                    <label  className="form-label">Precio</label>
                    <input type="text" className="form-control" id="inputAddress2"/>
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Cantidad</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Proveedor</label>
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