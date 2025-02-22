import React from "react";


const RegistrarPage = () => {
    return(
        <div className="p-4 px-4 mt-4 rounded shadow container-fluid justify-content-center align-items-center" style={{maxWidth: '1800px', width: '100%', backgroundColor: '#f9f9f9' }}>
            <form className="row g-2 mt-2">
                <div className="col-md-6">
                    <label  className="form-label">No.venta</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="inputFecha" />
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Descripcion</label>
                    <input type="text" className="form-control" aria-label="inputProducto"/>
                </div>
                <div className="col-md-2">
                    <label  className="form-label">Costo total</label>
                    <input type="text" className="form-control" id="inputAddress2"/>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Cantidad</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Cliente</label>
                    <input type="text" className="form-control" id="inputCliente"/>
                </div>
                <div className="col-md-2 px-4 mt-5">
                    <button type="submit" className="btn btn-primary px-2 ">Registrar</button>
                </div>
            </form>
            </div>
    )

}
export default RegistrarPage